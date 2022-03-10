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
 *    -> Create []
 *    -> Read [✔️]
 *    -> Update []
 *    -> Delete []
 *
 * -> Test out endpoints []
 */

const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv");
dotenv.config();

const typeDefs = require("./graphql/typeDefs.js");
const resolvers = require("./graphql/resolvers");

const mongoose = require("mongoose");

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT;

// Connect to database

mongoose
  .connect(process.env.CONNECT_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MOngodb");
    return server.listen({ port: process.env.PORT });
  })
  .then((res) => {
    console.log(`Server Running on port ${res.url}`);
  });
