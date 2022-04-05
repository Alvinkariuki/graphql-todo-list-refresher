const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  name: String,
  description: String,
  createdAt: String,
  isDone: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
