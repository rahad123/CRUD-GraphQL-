import { resolverMerge } from "./resolvers.js";
import { typeDefMerge } from "./typeDefs.js";

const schema = {
    resolvers: resolverMerge,
    typeDefs: typeDefMerge,
};

export { schema };