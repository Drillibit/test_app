const filterReducerDefaultState = {
  importance: 'all'
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_TASKS':
      return {
        ...state,
        importance: action.importance
      };
    default:
      return state;
  }
};
