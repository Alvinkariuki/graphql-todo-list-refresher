import { gql } from "@apollo/client";

export const FETCH_TODOS_QUERY = gql`
  query Todo {
    getTodos {
      id
      name
      createdAt
      description
      isDone
    }
  }
`;
