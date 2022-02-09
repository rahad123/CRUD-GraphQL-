import { gql } from "apollo-server-express";

const postTypeDefs = gql `
    type Post {
        id: ID
        title: String
        desc: String
        slug: String
        categories: [Category!]
        users: [User!]
    }

    type User {
        id: ID
        username: String
        email: String
        password: String
    }

    type Category {
        id: ID
        name: String
        slug: String
    }

    type Query {
        hel: String
        getAllPosts: [Post!]
        getSinglePost(id: ID): Post! 
        deletePost(id: ID): Post
    }

    input postInput {
        title: String
        desc: String
        slug: String
    }

    type Mutation {
        createPost(post: postInput): Post
        updatePost(id: ID, post: postInput): Post
    }
`
 
export {postTypeDefs}; 