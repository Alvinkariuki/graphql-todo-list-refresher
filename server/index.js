/**
 * TODOs
 * -> Create apollo server and listen on port [✔️]
 * -> Initialize necessary Apollo server requirements[✔️]
 * -> Build a todo schema [✔️]
 *      [
 *          {id:UUID, name:"djndnj", text:"sjsjjsn", createdAt: Date(), isDone: false}
 *      ]
 *
 * -> Build CRUD resolvers for todo []
 * -> Test out endpoints []
 */

const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv");
dotenv.config();

const typeDefs = require("./graphql/typeDefs.js");
const resolvers = require("./graphql/resolvers");
const client = require("./CONNETION.js");

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT;

// Connect to database
client.connect(() => {
  console.log("Connected to mongodb");
  return server.listen(PORT, () =>
    console.log(`Listening to port http://localhost:${PORT}`)
  );
});
