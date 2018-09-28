import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { users } from '../Reducers/users';

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(users, reduxDevTool, applyMiddleware(thunk));
export default store;
