import { GraphQLServer, PubSub } from "graphql-yoga";
import resolvers from "./resolver";
import Blog from "./mongoose/model";
import connect from "./mongoose";

connect();

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "server/schema.graphql",
  resolvers,
  context: { pubsub, Blog },
});

server.start(() => console.log("Graphql Server Running"));
