import * as types from '../action-types';
import action from '../core/action-factory';

export const add = user => dispatch => dispatch(action(types.USERS_ADD, user));
export const modifyCurrent = user => dispatch => dispatch(action(types.USERS_MODIFY, user));