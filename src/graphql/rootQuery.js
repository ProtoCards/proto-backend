const graphql = require('graphql')
const getProjects = require('./queries/getProjects')

const query = new graphql.GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: {
    getProjects
  }
})

module.exports = query
