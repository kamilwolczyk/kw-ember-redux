import { call, put, takeLatest } from 'redux-saga/effects'
import UsersApi from '../../api/users';

function* fetchUsers() {
  try {
    const users = yield call(UsersApi.fetchUser, null);
    yield put({type: "USER_FETCH_SUCCEEDED", users});
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", msg: e.message});
  }
}

export function* user() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUsers);
}
