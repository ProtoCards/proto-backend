const graphql = require('graphql')
const getProjects = require('./queries/getProjects')
const getProjectCards = require('./queries/getProjectCards')
const getProject = require('./queries/getProject')
const getCard = require('./queries/getCard')

const query = new graphql.GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: {
    getProjects,
    getProjectCards,
    getProject,
    getCard
  }
})

module.exports = query
