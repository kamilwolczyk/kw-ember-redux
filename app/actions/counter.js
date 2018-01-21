import * as types from './types';
import action from './action-factory';

export const add = value => dispatch => dispatch(action(types.COUNTER_ADD, value));
export const subtract = value => dispatch => dispatch(action(types.COUNTER_SUBTRACT, value));