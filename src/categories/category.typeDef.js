import { gql } from "apollo-server-express";

const categoryTypeDefs = gql `
    type Category {
        name: String
        slug: String
    }

    type Query {
        getAllCategory: [Category!]
        getSingleCategory(id: ID): Category
        deleteCategory(id: ID): Category 
    }

    input categoryInput {
        name: String
        slug: String
    }

    type Mutation {
        createCategory(post: categoryInput): Category
        updateCategory(id: ID, post: categoryInput): Category
    }
`

export {categoryTypeDefs}