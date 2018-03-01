const graphql = require('graphql')
const PropertyType = require('./propertyType')

const CardType = new graphql.GraphQLObjectType({
  name: 'Card',
  description: "A card object",
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
      type: new graphql.GraphQLList(PropertyType)
    }
  }
})

module.exports = CardType
