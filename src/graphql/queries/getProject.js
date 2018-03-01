const graphql = require('graphql')
const projectModel = require('../../models/projects')
const ProjectType = require('../types/projectType')

const getProjectQuery = {
  type: ProjectType,
  description: "A specific project, found by id",
  args: {
    id: {
      type: graphql.GraphQLID,
      description: "The projectId"
    }
  },
  resolve: (source, args) => {
    return projectModel.getProject(args.id)
      .then((project) => {
        return project
      })
  }
}

module.exports = getProjectQuery
