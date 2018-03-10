const graphql = require('graphql')
const cardModel = require('../../models/cards')
const CardType = require('../types/cardType')

const deleteCardsMutation = {
  type: new graphql.GraphQLList(CardType),
  description: "Delete multiple cards",
  args: {
    cardIds: {type: new graphql.GraphQLList(graphql.GraphQLID)}
  },
  resolve: (source, args) => {
    const cards = args.cardIds.map(id => {
      return cardModel.deleteCard(id)
        .then((card) => {
          return card
        })
    })
    return Promise.all(cards)
      .then((cards) => cards)
  }
}

module.exports = deleteCardsMutation
