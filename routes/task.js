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

  app.put('/api/edit_task/:id', async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id });
    (task.taskName = req.body.taskName || task.taskName),
      (task.taskDescription = req.body.taskDescription || task.taskDescription),
      (task.taskImportance = req.body.taskImportance || task.taskImportance),
      (task.deadline = req.body.deadline || task.deadline),
      (task.startDate = req.body.startDate || task.startDate),
      (task.taskDone =
        req.body.taskDone !== task.taskDone
          ? req.body.taskDone
          : task.taskDone);
    try {
      await task.save();
      res.send(task);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete('/api/remove_task/:id', async (req, res) => {
    await Task.findOneAndRemove({ _id: req.params.id });
    res.send(req.params.id);
  });
};
