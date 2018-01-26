import { UsersAction } from './actions';
import { initialState, UsersState } from './users-state';

export function usersReducer(state: UsersState = initialState, action: any) {
  switch (action.type) {
    case UsersAction.Add:
      return {
        ...state,
        current: {
          firstName: "",
          lastName: ""
        },
        users: [...state.users, action.payload]
      };
    case UsersAction.ModifyCurrent:
      return {
        ...state,
        current: action.payload
      };
    case UsersAction.RequestUsersSuccess:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      };
    case UsersAction.RequestUsersFailure:
      return { ...state, errors: `User fetch failed! Error: ${action.payload}` };
    default:
      return state;
  }
}
