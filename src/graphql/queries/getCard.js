const graphql = require('graphql')
const cardModel = require('../../models/cards')
const CardType = require('../types/cardType')

const getCardQuery = {
  type: CardType,
  description: "A specific card, found by id",
  args: {
    id: {
      type: graphql.GraphQLID,
      description: "The card id"
    }
  },
  resolve: (source, args) => {
    return cardModel.getCard(args.id)
      .then((card) => {
        return card
      })
  }
}

module.exports = getCardQuery
