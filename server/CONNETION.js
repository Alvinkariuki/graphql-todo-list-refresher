const { MongoClient, ServerApiVersion } = require("mongodb");

module.exports = new MongoClient(process.env.CONNECT_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
