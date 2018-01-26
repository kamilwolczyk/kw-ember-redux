import { types, Actions } from './actions';
import { initialState, UsersState } from './users-state';

export function usersReducer(state: UsersState = initialState, action: any) {
  switch (action.type) {
    case types.add:
      return {
        ...state,
        current: {
          firstName: "",
          lastName: ""
        },
        users: [...state.users, action.payload]
      };
    case types.modifyCurrent:
      return {
        ...state,
        current: action.payload
      };
    case types.requestUsersSuccess:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      };
    case types.requestUsersFailure:
      return { ...state, errors: `User fetch failed! Error: ${action.payload}` };
    default:
      return state;
  }
}
