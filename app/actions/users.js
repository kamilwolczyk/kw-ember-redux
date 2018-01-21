import * as types from './types';
import action from './action-factory';

export const add = user => dispatch => dispatch(action(types.USERS_ADD, user));
export const modifyCurrent = user => dispatch => dispatch(action(types.USERS_MODIFY, user));