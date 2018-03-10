const graphql = require('graphql')
const cardModel = require('../../models/cards')
const CardType = require('../types/cardType')
const CardInputType = require('../types/cardInputType')

const createCardMutation = {
  type: CardType,
  description: "Create a new card for a certain project",
  args: {
    input: {
      type: CardInputType,
      description: "Takes projectId, printQuantity, workingTitle, cardType, properties: [{name, fieldId, content}]"
    }
  },
  resolve: (source, args) => {
    return cardModel.createCard(args.input)
      .then((card) => {
        return card
      })
  }
}

module.exports = createCardMutation
