const graphql = require('graphql')
const cardModel = require('../../models/cards')
const CardType = require('../types/cardType')

const getProjectCardsQuery = {
  type: new graphql.GraphQLList(CardType),
  description: "List of all the cards of a certain project",
  args: {
    projectId: {
      type: graphql.GraphQLID,
      description: "The project id of the project the card belongs to"
    }
  },
  resolve: (source, {projectId}) => {
    return cardModel.getAllProjectCards(projectId)
      .then((cards) => {
        return cards
      })
  }
}

module.exports = getProjectCardsQuery
