const Todo = require("../../models/Todo.js");

module.exports = {
  Query: {
    // Returns an array of todos to populate UI
    getTodos: async () => {
      try {
        const todos = await Todo.find();
        return todos;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
