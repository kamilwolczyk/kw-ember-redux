import * as types from 'kw-redux/state/action-types';
import initialState from './initial-state';

export function counterReducer (state = initialState, action) {
  switch (action.type) {
    case types.COUNTER_ADD:
      return { ...state, value: state.value + action.data };
    case types.COUNTER_SUBTRACT:
      return { ...state, value: state.value - action.data }
    default:
      return state;
  }
}
