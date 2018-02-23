const graphql = require('graphql');
const chai = require('chai');
const chaiHttp = require('chai-http')
const gqlRoutes = require('../src/routes/graphql')
const app = require('../app')
chai.use(chaiHttp)
const expect = chai.expect;

describe('Project routes', () => {
  it('does stuff', (done) => {
    let query = `{
      hello
    }`
    chai.request(app)
      .post('/graphql')
      .send({"query": "{ hello }"})
      .end((err, res) => {
        expect(res.body.data.hello).to.equal('Hello World')
        done()
      })
  })
})
