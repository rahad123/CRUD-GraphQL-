import pkg from 'lodash';
const { merge } = pkg;
import { userResolvers } from '../src/users/user.resolver.js'
import { postResolvers } from '../src/posts/post.resolver.js'
import { categoryResolvers } from '../src/categories/category.resolver.js';
//import { loginResolvers } from '../authServer/resolver.js'
import { loginResolvers } from '../authServer/resolver.js';

const resolverMerge = merge([
    userResolvers,
    postResolvers,
    categoryResolvers,
    loginResolvers
])

export { resolverMerge }; 