import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import AddTaskReducer from '../reducers/AddTaskReducer';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      tasks: AddTaskReducer
    }),
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
};
