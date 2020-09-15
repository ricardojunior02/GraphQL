import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

const resolversArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'));
const typeDefs =mergeResolvers(resolversArray);


export default typeDefs;