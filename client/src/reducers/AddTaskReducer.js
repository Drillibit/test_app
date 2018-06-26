export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'EDIT_TASK':
      return state.map(task => {
        if (task._id === action._id) {
          return {
            ...task,
            ...action.updates
          };
        }
        return task;
      });
    case 'REMOVE_TASK':
      return state.filter(({ _id }) => _id !== action._id);
    default:
      return state;
  }
};
