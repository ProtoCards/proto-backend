const graphql = require('graphql')
const PropertyInputType = require('./propertyInputType')

const CardInputType = new graphql.GraphQLInputObjectType({
  name: 'CardInput',
  description: "Input schema for cards",
  fields: {
    _id: {
      type: graphql.GraphQLID
    },
    projectId: {
      type: graphql.GraphQLID
    },
    quantity: {
      type: graphql.GraphQLInt
    },
    properties: {
      type: new graphql.GraphQLList(PropertyInputType)
    }
  }
})

module.exports = CardInputType
