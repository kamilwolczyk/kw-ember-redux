import * as types from '../action-types';
import action from '../core/action-factory';

export const add = user => dispatch => dispatch(action(types.USERS_ADD, user));
export const modifyCurrent = user => dispatch => dispatch(action(types.USERS_MODIFY, user));
export const dispatchFetchUsers = () => dispatch => dispatch(action(types.USER_FETCH_REQUESTED, null));

export const dispatchUserFetchSucc = user => dispatch => dispatch(action(types.USER_FETCH_SUCCEEDED, user));
export const dispatchUserFetchFail = msg => dispatch => dispatch(action(types.USER_FETCH_FAILED, msg));