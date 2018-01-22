import * as types from '../action-types';
import action from '../core/action-factory';

export const add = value => dispatch => dispatch(action(types.COUNTER_ADD, value));
export const subtract = value => dispatch => dispatch(action(types.COUNTER_SUBTRACT, value));