const graphql = require('graphql');
const chai = require('chai');
const chaiHttp = require('chai-http')
const mongo = require('../mongoConfig')
const db = require('../mongoConfig').getDB
const app = require('../app')
chai.use(chaiHttp)
const expect = chai.expect;

describe('Project routes', () => {
  beforeEach(() => {
    mongo.connectDB((err) => {
      if (err) console.log(err)
      const projectId = db().collection('projects').insertOne({name: "a project", ownerId: 1})
      .then((project) => {
        return project.ops[0]._id
      })
      console.log(projectId)
      // mongo.db().collection('cards').insertOne({projectId: projectId, quantity: 2, properties: [{name: "title", fieldId: "1", content: "A Card Title"}]})
      //   .then((card)) => {
      //     return
      //   }
    })
  })

  it('returns an array of projects', (done) => {
    setTimeout(done, 3000)
    console.log(process.env.NODE_ENV)
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
          expect(res.body.data.getProjects).to.all.be.an('array')
          done()
        })
    })
  })

  it('returns an array of cards belonging to a project', (done) => {
    setTimeout(done, 3000)
    mongo.connectDB(async (err) => {
      if (err) console.log(err)
      chai.request(app)
        .get('/graphql')
        .send({'query': '{getProjectCards(projectId: "5a861f6ef36d2873fccf8312") { \
          _id \
        }}'})
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.data.getProjectCards).to.be.an('array')
          done()
        })
    })
  })
})
