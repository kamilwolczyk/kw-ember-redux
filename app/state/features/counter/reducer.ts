import { CounterState, InitialState } from './counter-state';
import { types } from './actions';
import { Action } from '../../core/action';

export function counterReducer(state: CounterState = InitialState, action: Action<number>): CounterState {
  switch (action.type) {
    case types.add:
      return { ...state, value: state.value + action.payload };
    case types.subtract:
      return { ...state, value: state.value - action.payload }
    default:
      return state;
  }
}
