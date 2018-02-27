const graphql = require('graphql')
const getProjects = require('./queries/getProjects')
const getProjectCards = require('./queries/getProjectCards')

const query = new graphql.GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: {
    getProjects,
    getProjectCards
  }
})

module.exports = query
