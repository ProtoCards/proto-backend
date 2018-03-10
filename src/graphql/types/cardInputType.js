const graphql = require('graphql')
const PropertyInputType = require('./propertyInputType')

const CardInputType = new graphql.GraphQLInputObjectType({
  name: 'CardInput',
  description: "Input schema for cards",
  fields: {
    projectId: {
      type: graphql.GraphQLID,
      description: "The ID of the project the card belongs to"
    },
    printQuantity: {
      type: graphql.GraphQLInt,
      description: "The number of copies of this card that appear in the deck"
    },
    workingTitle: {
      type: graphql.GraphQLString,
      description: "The working title of the card"
    },
    cardType: {
      type: graphql.GraphQLString,
      description: "The type of card"
    },
    properties: {
      type: new graphql.GraphQLList(PropertyInputType),
      description: "An array of properties, which take: name, fieldId, content"
    }
  }
})

module.exports = CardInputType
