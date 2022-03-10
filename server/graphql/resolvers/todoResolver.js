const todos = [
  {
    id: "6229eb0d8bdba23e4093c09b",
    name: "shshshhshs",
    description: "text for the format",
    createdAt: Date.now(),
    isDone: false,
  },
];

module.exports = {
  Query: {
    todos: () => todos,
  },
};
