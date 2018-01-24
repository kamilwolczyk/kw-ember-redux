import * as types from '../action-types';
import defaultState from './default-state';

export default function (state = defaultState, event) {
  switch (event.type) {
    case types.USERS_ADD:
      return { ...state,
        current: {
          firstName: "",
          lastName: ""
        },
        users: [...state.users, event.data]
      };
    case types.USERS_MODIFY:
      return { ...state,
        current: event.data
      };
    case types.USER_FETCH_SUCCEEDED:
      return { ...state,
        users: [...state.users, ...event.users]
      };
    case types.USER_FETCH_FAILED:
      return { ...state, errors: "User fetch failed!" };
    default:
      return state;
  }
}
