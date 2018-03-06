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
    console.log(cardModel.deleteCards(args.cardIds))
      // .then((cards) => {
      //   return cards
      // })
  }
}

module.exports = deleteCardsMutation
