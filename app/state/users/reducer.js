import * as types from '../action-types';
import defaultState from './default-state';

export default function (state = defaultState, event) {
  switch (event.type) {
    case types.USERS_ADD:
      return Object.assign({}, state, {
        current: {
          firstName: "",
          lastName: ""
        },
        users: [...state.users, event.data]
      });
    case types.USERS_MODIFY:
      return Object.assign({}, state, {
        current: event.data
      });
    case types.USER_FETCH_SUCCEEDED:
      return Object.assign({}, state, {
        users: [event.user]
      });
    case types.USER_FETCH_FAILED:
      return Object.assign({}, state, {
        errors: "User fetch failed!"
      });
    default:
      return state;
  }
}
