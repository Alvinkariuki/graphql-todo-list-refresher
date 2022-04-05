const { gql } = require("apollo-server");

const typeDefs = gql`
  "Define a todo type"
  type Todo {
    id: ID!
    name: String
    description: String
    createdAt: String!
    isDone: Boolean!
  }

  type Query {
    "The query returns a  list of zero or more todos"
    getTodos: [Todo]

    "Query for a single todo based on its ID"
    getTodo(id: ID!): Todo
  }
`;

module.exports = typeDefs;
