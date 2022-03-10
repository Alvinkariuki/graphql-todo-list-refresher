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
const { ApolloServer, gql } = require("apollo-server");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
dotenv.config();

const { MongoClient, ServerApiVersion } = require("mongodb");

//  Type definition initialization
const typeDefs = gql`
  "Define a todo type"
  type Todo {
    id: ID!
    name: String
    description: String
    createdAt: String!
    isDone: Boolean!
  }

  "The query returns a  list of zero or more todos"
  type Query {
    todos: [Todo]
  }
`;

const todos = [
  {
    id: uuidv4(),
    name: "djndnj",
    text: "sjsjjsn",
    createdAt: Date(),
    isDone: false,
  },
];

const resolvers = {
  Query: {
    todos: () => todos,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT || 5000;

// Connect to database
const uri = process.env.CONNECT_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect(() => {
  console.log("Connected to mongodb");
  return server.listen(PORT, () =>
    console.log(`Listening to port http://localhost:${PORT}`)
  );
});
