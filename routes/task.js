const mongoose = require('mongoose');

require('../model/task');

const Task = mongoose.model('tasks');

module.exports = app => {
  app.post('/api/add_task', async (req, res) => {
    const task = new Task({
      taskName: req.body.taskName,
      taskDescription: req.body.taskDescription,
      taskImportance: req.body.taskImportance,
      deadline: req.body.deadline,
      startDate: req.body.startDate,
      taskDone: req.body.taskDone
    });
    try {
      await task.save();
      res.send(task);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get('/api/get_tasks', async (req, res) => {
    const tasks = await Task.find({});
    res.send(tasks);
  });
};