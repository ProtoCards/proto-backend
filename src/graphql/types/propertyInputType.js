const graphql = require('graphql')

const PropertyInputType = new graphql.GraphQLInputObjectType({
  name: 'PropertyInput',
  description: "Input schema for card properties",
  fields: {
    name: {
      type: graphql.GraphQLString,
      description: "The name of the property (ex. title, health)"
    },
    fieldId: {
      type: graphql.GraphQLString,
      description: "The ID of the field on the card"
    },
    content: {
      type: graphql.GraphQLString,
      description: "The content of the property (ex. 'Title of Card')"
    }
  }
})

module.exports = PropertyInputType
