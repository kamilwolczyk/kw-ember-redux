import { fork } from 'redux-saga/effects';
import { userSaga } from 'kw-redux/state/features/users';

export default function* root() {
  yield [
    fork(userSaga)
  ];
}