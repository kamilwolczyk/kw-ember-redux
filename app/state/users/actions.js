import * as types from '../action-types';
import action from '../core/action-factory';

export const add = user => action(types.USERS_ADD, user);
export const modifyCurrent = user => action(types.USERS_MODIFY, user);
export const fetchUsers = () => action(types.USER_FETCH_REQUESTED, null);
