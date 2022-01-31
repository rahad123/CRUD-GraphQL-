import { gql } from "apollo-server-express";

const loginTypeDefs = gql `
    type User {
        id: ID
        username: String
        email: String
        password: String
    }

    input userInput {
        username: String
        email: String
        password: String
    }

    type Mutation {
        register(user: userInput): User
        createUser(user: userInput): User
        login(user: userInput): User
    }
`
export{ loginTypeDefs };