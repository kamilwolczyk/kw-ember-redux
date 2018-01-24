import * as types from 'kw-redux/state/action-types';
import action from 'kw-redux/state/core/action-factory';

export const add = user => action(types.USERS_ADD, user);
export const modifyCurrent = user => action(types.USERS_MODIFY, user);
export const fetchUsers = () => action(types.USER_FETCH_REQUESTED, null);
