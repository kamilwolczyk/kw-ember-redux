import { call, put, takeLatest } from 'redux-saga/effects'
import UsersApi from 'kw-redux/api/users';
import { create } from '../../core/action';
import { UsersAction } from './actions';
import { IUser } from './dtos/user';

function* fetchUsers() {
  try {
    const users = yield call(UsersApi.fetchUser, null);
    yield put(create(UsersAction.RequestUsersSuccess, users));
  } catch (e) {
    yield put(create(UsersAction.RequestUsersFailure, e.message));
  }
}

export function* userSaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUsers);
}
