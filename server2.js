import {ApolloServer, gql, AuthenticationError } from "apollo-server";
import { schema } from './graphQL/schema.js';

    const server = new ApolloServer({
        ...schema,
        context: ({ req }) => {
            let token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null

            if(token) {
                try {
                    token = jwt.verify(token, ACCESS_TOKEN_SECRET);
                } catch(error) {
                    throw new Error("not authenticated");
                }
            }
 
            return { token };
        }

    }) 

// const app = express();

// app.use(cookieParser());

// The `listen` method launches a web server.


// await server.start();

// server.applyMiddleware({ app });

server.listen(3000);