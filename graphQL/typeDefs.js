import {mergeTypeDefs} from '@graphql-tools/merge'
import { typeDefs } from "../model/typeDef.js";
//import { postTypeDefs } from "../postModel/typeDef.js";
import { postTypeDefs } from '../postModel/typeDef.js';
import { categoryTypeDefs } from '../categoryModel/typeDef.js';
import { loginTypeDefs } from '../authServer/typeDef.js';

const typeDefMerge = mergeTypeDefs([
    typeDefs,
    postTypeDefs,
    categoryTypeDefs,
    loginTypeDefs
])

export {typeDefMerge}
