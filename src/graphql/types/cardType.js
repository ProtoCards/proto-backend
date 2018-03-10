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
    printQuantity: {
      type: graphql.GraphQLInt
    },
    workingTitle: {
      type: graphql.GraphQLString
    },
    type: {
      type: graphql.GraphQLString
    },
    properties: {
      type: new graphql.GraphQLList(PropertyType)
    }
  }
})

module.exports = CardType
