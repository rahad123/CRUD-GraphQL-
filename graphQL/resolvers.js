import pkg from 'lodash';
const { merge } = pkg;
import { resolvers } from '../model/resolver.js'
import { postResolvers } from '../postModel/resolver.js'
import { categoryResolvers } from '../categoryModel/resolver.js';
//import { loginResolvers } from '../authServer/resolver.js'
import { loginResolvers } from '../authServer/resolver.js';

const resolverMerge = merge([
    resolvers,
    postResolvers,
    categoryResolvers,
    loginResolvers
])

export { resolverMerge }; 