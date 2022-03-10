const todoResolver = require("./todoResolver.js");

module.exports = {
  Query: {
    ...todoResolver.Query,
  },
};
