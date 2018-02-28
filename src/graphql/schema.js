const {GraphQLSchema} = require('graphql')
const query = require('./rootQuery')
const mutation = require('./rootMutation')

const rootSchema = new GraphQLSchema({
  query,
  mutation
})

module.exports = rootSchema
