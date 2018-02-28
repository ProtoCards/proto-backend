const graphql = require('graphql')
const cardModel = require('../../models/cards')
const CardType = require('../types/cardType')

const deleteCardMutation = {
  type: CardType,
  description: "Delete a certain card",
  args: {
    _id: {type: graphql.GraphQLID}
  },
  resolve: (source, args) => {
    return cardModel.deleteCard(args._id)
      .then((card) => {
        return card
      })
  }
}

module.exports = deleteCardMutation
