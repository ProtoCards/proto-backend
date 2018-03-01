const graphql = require('graphql')

const PropertyType = new graphql.GraphQLObjectType({
  name: 'Property',
  description: "A property on a card",
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

module.exports = PropertyType
