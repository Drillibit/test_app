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

export const editTask = (_id, updates) => ({
  type: 'EDIT_TASK',
  _id,
  updates
});

export const startEditTask = (_id, updates) => {
  return async dispatch => {
    const task = {
      taskName: updates.taskName,
      taskDescription: updates.taskDescription,
      taskImportance: updates.taskImportance,
      deadline: updates.deadline,
      startDate: updates.startDate,
      taskDone: updates.taskDone
    };
    let res = await axios.put(`/api/edit_task/${_id}`, task);
    dispatch(editTask(_id, { ...res.data }));
  };
};
