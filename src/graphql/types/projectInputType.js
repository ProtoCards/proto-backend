const graphql = require('graphql')

const ProjectInputType = new graphql.GraphQLInputObjectType({
  name: 'ProjectInput',
  description: "Input schema for projects",
  fields: {
    name: {
      type: graphql.GraphQLString,
      description: "The name of the project"
    },
    ownerId: {
      type: graphql.GraphQLInt,
      description: "The project's owner id"
    }
  }
})

module.exports = ProjectInputType
