import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose';

function server({ typeDefs, resolvers}){
  mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const pubsub = new PubSub();
  const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub }});
  server.listen().then(({ url }) => console.log(`Server at running on ${url}`))
}

export default server;