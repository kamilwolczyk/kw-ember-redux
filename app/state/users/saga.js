import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../api/index';

function* fetchUsers() {
  try {
    const users = yield call(Api.fetchUser, null);
    yield put({type: "USER_FETCH_SUCCEEDED", users});
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", msg: e.message});
  }
}

export function* user() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUsers);
}
