import { call, put, takeLatest } from 'redux-saga/effects'
import UsersApi from 'kw-redux/api/users';
import { UserAction, usersFetchFailed, usersFetchSucceeded } from "./actions";

function* fetchUsers() {
  try {
    const users = yield call(UsersApi.fetchUser);
    yield put(usersFetchSucceeded(users));
  } catch (e) {
    yield put(usersFetchFailed(e.message));
  }
}

export function* userSaga() {
  yield takeLatest(UserAction.RequestUsers, fetchUsers);
}
