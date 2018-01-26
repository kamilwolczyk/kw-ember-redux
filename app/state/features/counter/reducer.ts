import { CounterState, InitialState } from './counter-state';
import { CounterAction } from './actions';
import { Action } from '../../core/action';

export function counterReducer(state: CounterState = InitialState, action: Action<number>): CounterState {
  switch (action.type) {
    case CounterAction.Add:
      return { ...state, value: state.value + action.payload };
    case CounterAction.Subtract:
      return { ...state, value: state.value - action.payload }
    default:
      return state;
  }
}
