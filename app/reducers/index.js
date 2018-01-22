import {
  combineReducers
} from 'redux';
import counter from '../state/counter/reducer';
import users from '../state/users/reducer';

export default combineReducers({
  counter,
  users,
});
