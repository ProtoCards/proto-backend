const graphql = require('graphql');
const chai = require('chai');
const chaiHttp = require('chai-http')
const mongo = require('../mongoConfig')
const db = require('../mongoConfig').getDB
const app = require('../app')
chai.use(chaiHttp)
const expect = chai.expect;

describe('Project routes', () => {
  let projectId
  beforeEach(() => {
    mongo.connectDB((err) => {
      if (err) console.log(err)
      db().collection('projects').insertOne({name: "a project", ownerId: 1})
      .then((project) => {
        projectId = project.ops[0]._id
      })
      db().collection('cards').insertOne({projectId: projectId, quantity: 3, properties: [{name: "title", fieldId: "h", content: "a title here"}]})
        .then((card) => {
          console.log(card.ops[0]._id)
        })
      // mongo.db().collection('cards').insertOne({projectId: projectId, quantity: 2, properties: [{name: "title", fieldId: "1", content: "A Card Title"}]})
      //   .then((card)) => {
      //     return
      //   }
    })
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
          console.log(res.body.data.getProjects)
          expect(res).to.have.status(200)
          expect(res.body.data.getProjects).to.all.be.an('array')
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
          console.log(res.body.data)
          expect(res).to.have.status(200)
          expect(res.body.data.getProjectCards).to.be.an('array')
          done()
        })
    })
  })
})
