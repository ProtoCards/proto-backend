const express = require('express');
const { buildSchema } = require('graphql');
const projectModel = require('../models/projects')
const cardModel = require('../models/cards')

const schema = buildSchema(`
  type Project {
    _id: String
    name: String
    ownerId: Int
  }

  type Card {
    _id: String
    quantity: Int
    properties: [Property]
  }

  type Property {
    name: String
    fieldId: String
    content: String
  }

  type Query {
    hello: String
    project(id: String): Project
    getProjects(ownerId: String): [Project]
    getProjectCards(projectId: String): [Card]
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
  getProjectCards: (args) => {
    return cardModel.getAllProjectCards(args.projectId)
      .then((cards) => {
        return cards
      })
  },
}

module.exports = {schema, root}
