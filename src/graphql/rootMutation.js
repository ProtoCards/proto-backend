const graphql = require('graphql')
const createCard = require('./mutations/createCard')

const mutation = new graphql.GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: {
    createCard
  }
})

module.exports = mutation
