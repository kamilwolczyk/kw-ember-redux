import * as types from '../action-types';
import defaultState from './default-state';

export default function (state = defaultState, event) {
  switch (event.type) {
    case types.COUNTER_ADD:
      return Object.assign({}, state, {
        value: state.value + event.data
      });
    case types.COUNTER_SUBTRACT:
      return Object.assign({}, state, {
        value: state.value - event.data
      });
    default:
      return state;
  }
}
