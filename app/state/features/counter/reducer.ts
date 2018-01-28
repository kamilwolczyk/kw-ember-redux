import { AddAction, CounterAction, SubtractAction } from "./actions";

export const initialState = {
  value: 0
};

type ActionTypes =
  | AddAction
  | SubtractAction;

export function counterReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case CounterAction.Add:
      return { ...state, value: state.value + action.payload };
    case CounterAction.Subtract:
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
}
