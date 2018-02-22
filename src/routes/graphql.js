const express = require('express');
const { buildSchema } = require('graphql');
const projectModel = require('../models/projects')
const cardModel = require('../models/cards')

const schema = buildSchema(`
  type Project {
    _id: ID
    name: String
    ownerId: Int
  }

  type Card {
    _id: ID
    projectId: ID
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

  input PropertyInput {
    name: String!
    fieldId: String
    content: String!
  }

  input CardInput {
    projectId: ID!
    quantity: Int!
    properties: [PropertyInput]
  }

  type Mutation {
    createCard(input: CardInput): Card
    updateCard(_id: ID!, input: CardInput): Card
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
  createCard: (args) => {
    return cardModel.createCard(args.input)
      .then((card) => {
        return card
      })
  },
  updateCard: (args) => {
    console.log(args._id)
    return cardModel.updateCard(args._id, args.input)
      .then((card) => {
        console.log(card)
        return card
      })
  }
}

module.exports = {schema, root}
