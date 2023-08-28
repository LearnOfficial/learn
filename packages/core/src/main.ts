import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "@learn/common/schemas"
import { resolvers } from "./resolvers";

const server = new ApolloServer({
	typeDefs: typeDefs.toString,
	resolvers: resolvers
});

const { url } = await startStandaloneServer(server, {
	listen: {port: 4000}
});

console.log(`Server ready at: ${url}`);
