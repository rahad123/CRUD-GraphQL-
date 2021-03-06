import {ApolloServer, gql} from 'apollo-server';
import { mongoose} from '../config.js '

let userSchema = new mongoose.Schema ({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        index : true,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const User = mongoose.model('User', userSchema);
export {User};