const graphql = require('graphql')
const createCard = require('./mutations/createCard')
const createCards = require('./mutations/createCards')

const mutation = new graphql.GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: {
    createCard,
    createCards
  }
})

module.exports = mutation
