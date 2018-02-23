const graphql = require('graphql');
const chai = require('chai');
const chaiHttp = require('chai-http')
const gqlRoutes = require('../src/routes/graphql')
const mongo = require('../mongoConfig')
const app = require('../app')
chai.use(chaiHttp)
const expect = chai.expect;

describe('Project routes', () => {
  it('does stuff', (done) => {
    chai.request(app)
      .get('/graphql')
      .send({"query": "{ hello }"})
      .end((err, res) => {
        expect(res.body.data.hello).to.equal('Hello World')
        done()
      })
  })

  it('returns an array of projects', (done) => {
    mongo.connectDB(async (err) => {
      console.log("connected")
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
})
