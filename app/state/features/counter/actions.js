import * as types from 'kw-redux/state/action-types';
import action from 'kw-redux/state/core/action-factory';

export const add = value => action(types.COUNTER_ADD, value);
export const subtract = value => action(types.COUNTER_SUBTRACT, value);
