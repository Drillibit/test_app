const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  taskName: String,
  taskDescription: String,
  taskImportance: String,
  deadline: Number,
  startDate: Number,
  taskDone: Boolean,
  taskDoneDate: Number,
  noDeadline: Boolean
});

mongoose.model('tasks', taskSchema);
