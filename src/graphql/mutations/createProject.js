const graphql = require('graphql')
const projectModel = require('../../models/projects')
const ProjectType = require('../types/projectType')
const ProjectInputType = require('../types/projectInputType')

const createProjectMutation = {
  type: ProjectType,
  description: "Create a new project",
  args: {
    input: {
      type: ProjectInputType,
      description: "Takes name, ownerId"
    }
  },
  resolve: (source, args) => {
    return projectModel.createProject(args.input)
      .then((project) => {
        return project
      })
  }
}

module.exports = createProjectMutation
