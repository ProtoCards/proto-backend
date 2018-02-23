const graphql = require('graphql');
const chai = require('chai');
const chaiHttp = require('chai-http')
const gqlRoutes = require('../src/routes/graphql')
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

  it('returns the project you asked for', (done) => {
    const mongo = require('../mongoConfig')
    mongo.connectDB(async (err) => {})
    chai.request(app)
      .get('/graphql')
      .send({'query': '{getProjects(ownerId: 1) { \
        _id \
        name \
        ownerId \
      }}'})
      .end((err, res) => {
        console.log(res.body)
        expect(res.body).to.equal("sandwich")
      })
  })
})
