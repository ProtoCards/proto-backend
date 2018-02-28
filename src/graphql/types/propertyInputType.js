const graphql = require('graphql')

const PropertyInputType = new graphql.GraphQLInputObjectType({
  name: 'PropertyInput',
  description: "Input schema for card properties",
  fields: {
    name: {
      type: graphql.GraphQLString
    },
    fieldId: {
      type: graphql.GraphQLString
    },
    content: {
      type: graphql.GraphQLString
    }
  }
})

module.exports = PropertyInputType
