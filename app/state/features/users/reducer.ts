import {
  AddAction,
  ModifyAction,
  RequestAction,
  RequestUsersFailureAction,
  RequestUsersSuccessAction,
  UserAction
} from "./actions";

export const initialState = {
  current: {
    firstName: "",
    lastName: ""
  },
  users: [],
  errors: []
};

type ActionTypes =
  | AddAction
  | ModifyAction
  | RequestAction
  | RequestUsersSuccessAction
  | RequestUsersFailureAction;

export function usersReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case UserAction.Add:
      return {
        ...state,
        current: { firstName: "", lastName: "" },
        users: [...state.users, action.payload]
      };
    case UserAction.ModifyCurrent:
      return {
        ...state,
        current: { ...state.current, ...action.payload }
      };
    case UserAction.RequestUsersSuccess:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      };
    case UserAction.RequestUsersFailure:
      return {
        ...state,
        errors: [`User fetch failed! Error: ${action.payload}`]
      };
    default:
      return state;
  }
}
