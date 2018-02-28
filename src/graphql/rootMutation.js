const graphql = require('graphql')
const createCard = require('./mutations/createCard')
const createCards = require('./mutations/createCards')
const updateCard = require('./mutations/updateCard')

const mutation = new graphql.GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: {
    createCard,
    createCards,
    updateCard
  }
})

module.exports = mutation
