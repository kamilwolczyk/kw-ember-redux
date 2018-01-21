import * as types from '../actions/types';

const initialState = {
  current: null,
  users: []
};

export default function (state = initialState, event) {
  switch (event.type) {
    case types.USERS_ADD:
      return {
        current: state.current,
        users: [...state.users, event.data]
      };
    case types.USERS_MODIFY:
      return {
        current: event.data,
        users: state.users
      };
    default:
      return initialState;
  }
}
