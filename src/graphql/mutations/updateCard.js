const graphql = require('graphql')
const cardModel = require('../../models/cards')
const CardType = require('../types/cardType')
const CardInputType = require('../types/cardInputType')

const updateCardMutation = {
  type: CardType,
  description: "Create a new card for a certain project",
  args: {
    _id: {type: graphql.GraphQLID},
    // see src/graphql/types/cardInputType
    input: {type: CardInputType}
  },
  resolve: (source, args) => {
    return cardModel.updateCard(args._id, args.input)
      .then((card) => {
        return card
      })
  }
}

module.exports = updateCardMutation
