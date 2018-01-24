import { fork } from 'redux-saga/effects';
import { user } from '../state/users/saga';

export default function* root() {
  yield [
    fork(user)
  ];
}