import express from 'express';
import { data } from './data.js';
import { resolvers } from './resolver.js';
import expressGraphQL, { graphqlHTTP } from 'express-graphql';
import {ApolloServer, gql} from 'apollo-server';
import { typeDefs } from './schema.js';
import {graphql, buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLString} from 'graphql';
//import { query } from './resolver.js';
// const {
//     GraphQLSchema,
//     GraphQLObjectType,
//     GraphQLString
// };

// const app = express();
// let schema = buildSchema(`
// type Query {
//     quoteOfTheDay: String, 
//     random: Float!
//     rollThreeDice: [Int]
// }`)

// // let schema = buildSchema(`
// //   type Query {
// //     hello: String
// //   }
// // `);
// let root = {
//     quoteOfTheDay: () => {
//         //return Math.random < 0.5 ? 'take it easy : salvation period'
//         console.log("gooo..");
//     },
//     random: () => {
//         return Math.random();
//     },
//     rollThreeDice: () => {
//         return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
//     }
// }

// // let root = {
// //     hello: () => {
// //         return "hello world";
// //     }
// // }

// graphql(schema, '{ hello }', root).then((response) => {
//     console.log("response");
// })

// // const schema = new GraphQLSchema({
// //     query: new GraphQLObjectType({
// //         name: "hello world",
// //         fileds: () => ({
// //             message: {
// //                 type: GraphQLString,
// //                 resolve: () => "hello wrold"
// //             }
// //         })
// //     }) 
// // })

// // app.use('/graphql', graphqlHTTP({
// //     schema: schema,
// //     rootValue: root,
// //     graphiql: true
// // }));

// const server = new ApolloServer({typeDefs, resolvers});

// app.get('/', (req, res) => {
//     res.json(data);
//     //console.log("goo");
// })
app.listen(3000);