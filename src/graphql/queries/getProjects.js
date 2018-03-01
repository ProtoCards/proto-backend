const graphql = require('graphql')
const projectModel = require('../../models/projects')
const ProjectType = require('../types/projectType')

const getProjectsQuery = {
  type: new graphql.GraphQLList(ProjectType),
  description: "List of all of a user's projects",
  args: {
    ownerId: {
      type: graphql.GraphQLInt,
      description: "The user id of the project's owner"
    }
  },
  resolve: (source, {ownerId}) => {
    // currently this returns ALL projects, not just this user's
    return projectModel.getAllProjects()
      .then((projects) => {
        return projects
      })
  }
}

module.exports = getProjectsQuery
