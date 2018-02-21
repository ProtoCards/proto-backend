const express = require('express');
const { buildSchema } = require('graphql');
const projectModel = require('../models/projects')


const schema = buildSchema(`
  type Project {
    _id: String
    name: String
    ownerId: Int
  }

  type Query {
    hello: String
    project(id: String): Project
    getProjects(ownerId: String): [Project]
  }

`)

const root = {
  hello: () => {
    return 'Hello World'
  },
  project: (id) => {
    return projectModel.getProject(id).then((project) => new Project(project))
  },
  getProjects: (ownerId) => {
    return projectModel.getAllProjects()
      .then((projects) => {
        return projects
      })
  },
}

module.exports = {schema, root}
