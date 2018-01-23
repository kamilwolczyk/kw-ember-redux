import { takeLatest } from 'redux-saga/effects'
import fetchUser from './user';

export default function* rootSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
