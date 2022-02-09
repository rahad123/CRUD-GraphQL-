import {mergeTypeDefs} from '@graphql-tools/merge'
import { typeDefs } from "../src/users/user.typeDef.js";
//import { postTypeDefs } from "../postModel/typeDef.js";
import { postTypeDefs } from '../src/posts/post.typeDef.js';
import { categoryTypeDefs } from '../src/categories/category.typeDef.js';
import { loginTypeDefs } from '../authServer/typeDef.js';

const typeDefMerge = mergeTypeDefs([
    typeDefs,
    postTypeDefs,
    categoryTypeDefs,
    loginTypeDefs
])

export {typeDefMerge}
