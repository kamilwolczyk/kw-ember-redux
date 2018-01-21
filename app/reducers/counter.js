import * as types from '../actions/types';

const initialState = {
  value: 0
};

export default function (state = initialState, event) {
  switch (event.type) {
    case types.COUNTER_ADD:
      return {
        value: state.value + event.data
      };
    case types.COUNTER_SUBTRACT:
      return {
        value: state.value - event.data
      };
    default:
      return initialState;
  }
}
