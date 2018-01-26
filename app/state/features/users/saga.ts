import { call, put, takeLatest } from 'redux-saga/effects'
import UsersApi from 'kw-redux/api/users';
import { create } from '../../core/action';
import { types } from './actions';
import { User } from './dtos/user';

function* fetchUsers() {
  try {
    const users = yield call(UsersApi.fetchUser, null);
    yield put(create<User[]>(types.requestUsersSuccess, users));
  } catch (e) {
    yield put(create<string>(types.requestUsersFailure, e.message));
  }
}

export function* userSaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUsers);
}
