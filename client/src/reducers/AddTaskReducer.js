export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'REMOVE_TASK':
      return state.filter(({ _id }) => _id !== action._id);
    default:
      return state;
  }
};
