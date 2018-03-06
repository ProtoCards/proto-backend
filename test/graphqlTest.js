const graphql = require('graphql');
const chai = require('chai');
const chaiHttp = require('chai-http')
const mongo = require('../mongoConfig')
const db = require('../mongoConfig').getDB
const app = require('../app')
chai.use(chaiHttp)
const expect = chai.expect;

describe('GraphQL queries and mutations', () => {
  let projectId

  before(() => {
    mongo.connectDB((err) => {
      if (err) console.log(err)
      db().collection('projects').insertOne({name: "a project", ownerId: 1})
      .then((project) => {
        projectId = `${project.ops[0]._id}`
        return projectId
      })
      .then((projId) => {
        db().collection('cards').insertOne({projectId: projId, quantity: 3, properties: [{name: "title", fieldId: "h", content: "a title here"}]})
        .then((card) => {
          return
        })
      })
    })
  })

  after(() => {
    db().collection('projects').drop()
    db().collection('cards').drop()
  })

  it('returns an array of projects', function(done) {
    this.timeout(4000)
    mongo.connectDB(async (err) => {
      if (err) console.log(err)
      chai.request(app)
        .get('/graphql')
        .send({'query': '{getProjects(ownerId: 1) { \
          _id \
          name \
          ownerId \
        }}'})
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.data.getProjects[0]).to.include({_id: projectId})
          done()
        })
    })
  })

  it('returns an array of cards belonging to a project', function(done) {
    this.timeout(4000)
    mongo.connectDB(async (err) => {
      if (err) console.log(err)
      const query = `query getCards($projectId: ID) {
        getProjectCards(projectId: $projectId) {
          _id
          projectId
          quantity
          properties {
            name
            fieldId
            content
          }
        }
      }`
      chai.request(app)
        .post('/graphql')
        .send({
          query: query,
          variables: {projectId: projectId}
        })
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.data.getProjectCards[0]).to.include({projectId: projectId})
          done()
        })
    })
  })

  it('returns the created card', function() {
    this.timeout(4000)
    const mutate = `mutation newCard($input:CardInput) {
      createCard(input:$input) {
        _id
        projectId
        quantity
        properties {
          name
          fieldId
          content
        }
      }
    }`
    chai.request(app)
      .post('/graphql')
      .send({
        query: mutate,
        variables: {"input": {
          "projectId": projectId,
          "quantity": 2,
          "properties": [{
            "name": "Title",
            "fieldId": "H",
            "content": "This here is a title"
          }]
        }}
      })
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body.data.createCard).to.nested.include({'properties[0].content': 'This here is a title'})
        done()
      })
  })
})
