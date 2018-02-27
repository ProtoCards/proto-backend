const {GraphQLSchema} = require('graphql')
const query = require('./rootQuery')

const rootSchema = new GraphQLSchema({
  query
})

module.exports = rootSchema
