import { combineReducers } from 'redux';
import { counterReducer } from 'kw-redux/state/features/counter';
import { usersReducer } from 'kw-redux/state/features/users';

export default combineReducers({
  counter: counterReducer,
  users: usersReducer,
});
