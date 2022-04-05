const { gql } = require("apollo-server");

const typeDefs = gql`
  "Define a todo type"
  type Todo {
    id: ID!
    name: String!
    description: String
    createdAt: String!
    isDone: Boolean!
  }

  type Query {
    "The query returns a list of zero or more todos"
    getTodos: [Todo]

    "Query for a single todo based on its ID"
    getTodo(id: ID!): Todo
  }

  input TodoInput {
    name: String!
    description: String
  }

  type Mutation {
    "The this mutation takes in a name and/or description then returns the todo created"
    createTodo(todoInput: TodoInput): Todo!
  }
`;

module.exports = typeDefs;
