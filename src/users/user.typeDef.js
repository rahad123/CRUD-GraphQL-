import { gql } from "apollo-server-express";

const typeDefs = gql `
    type User {
      id: ID
      username: String
      email: String
      password: String
    }
    type Query {
        hello: String
        data: String

        getAllUsers: [User]
        getSingleUser(id: ID): User
        deleteUser(id:ID): User
    }

    input UserInput {
      username: String
      email: String
      password: String
    }

    type Mutation {
      createUser(user: UserInput): User
      updateUser(id:ID, user: UserInput): User
    }
  `
;

export { typeDefs };