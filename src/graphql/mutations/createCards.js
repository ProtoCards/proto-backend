const graphql = require('graphql')
const cardModel = require('../../models/cards')
const CardType = require('../types/cardType')
const CardInputType = require('../types/cardInputType')

const createCardsMutation = {
  type: new graphql.GraphQLList(CardType),
  description: "Create multiple new cards for a certain project",
  args: {
    // see src/graphql/types/cardInputType
    input: {type: new graphql.GraphQLList(CardInputType)}
  },
  resolve: (source, args) => {
    return cardModel.createManyCards(args.input)
      .then((cards) => {
        return cards
      })
  }
}

module.exports = createCardsMutation
