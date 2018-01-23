import { call, put } from 'redux-saga/effects'
import Api from '../api'

export default function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, null);
    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", msg: e.message});
  }
}
