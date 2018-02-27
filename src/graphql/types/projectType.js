const graphql = require('graphql')

const ProjectType = new graphql.GraphQLObjectType({
  name: 'Project',
  description: "A project object",
  fields: {
    _id: {
      type: graphql.GraphQLString
    },
    name: {
      type: graphql.GraphQLString
    },
    ownerId: {
      type: graphql.GraphQLInt
    }
  }
})

module.exports = ProjectType
