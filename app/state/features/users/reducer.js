import * as types from 'kw-redux/state/action-types';
import initialState from './initial-state';

export function usersReducer (state = initialState, action) {
  switch (action.type) {
    case types.USERS_ADD:
      return { ...state,
        current: {
          firstName: "",
          lastName: ""
        },
        users: [...state.users, action.data]
      };
    case types.USERS_MODIFY:
      return { ...state,
        current: action.data
      };
    case types.USER_FETCH_SUCCEEDED:
      return { ...state,
        users: [...state.users, ...action.users]
      };
    case types.USER_FETCH_FAILED:
      return { ...state, errors: "User fetch failed!" };
    default:
      return state;
  }
}
