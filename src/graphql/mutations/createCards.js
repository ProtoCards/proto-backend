const graphql = require('graphql')
const cardModel = require('../../models/cards')
const CardType = require('../types/cardType')
const CardInputType = require('../types/cardInputType')

const createCardsMutation = {
  type: new graphql.GraphQLList(CardType),
  description: "Create multiple new cards for a certain project",
  args: {
    input: {
      type: new graphql.GraphQLList(CardInputType),
      description: "Takes an array of cards with: projectId, quantity, properties: [{name, fieldId, content}]"
    }
  },
  resolve: (source, args) => {
    return cardModel.createManyCards(args.input)
      .then((cards) => {
        return cards
      })
  }
}

module.exports = createCardsMutation
