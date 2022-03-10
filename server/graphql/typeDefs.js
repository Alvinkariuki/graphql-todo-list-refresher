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

  "The query returns a  list of zero or more todos"
  type Query {
    todos: [Todo]
  }
`;

module.exports = typeDefs;
