import axios from 'axios';

export const addTask = task => ({
  type: 'ADD_TASK',
  task
});

export const startAddTask = (taskData = {}) => {
  return async dispatch => {
    const {
      taskName = '',
      taskDescription = '',
      taskImportance = '',
      deadline = 0,
      startDate = 0,
      taskDone = false
    } = taskData;
    const task = {
      taskName,
      taskDescription,
      taskImportance,
      deadline,
      startDate,
      taskDone
    };

    let res = await axios.post('/api/add_task', task);
    dispatch(addTask({ ...res.data }));
  };
};

export const taskDone = (_id, task) => ({
  type: 'TASK_DONE',
  _id,
  task
});
