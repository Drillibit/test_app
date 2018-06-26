export const addTask = task => ({
  type: 'ADD_TASK',
  task
});

export const taskDone = (_id, task) => ({
  type: 'TASK_DONE',
  _id,
  task
});
