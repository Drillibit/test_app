import axios from 'axios';
import { addTask } from './task';

export const fetchData = () => {
  return async dispatch => {
    let tasksData = await axios.get('/api/get_tasks');
    tasksData.data.map(task => {
      dispatch(addTask({ ...task }));
      return task;
    });
  };
};
