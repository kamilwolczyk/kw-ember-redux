import { create } from '../../core/action';
import { User } from './dtos/user';

export const add = (user: User) => create(types.add, user);
export const modifyCurrent = (user: User) => create<User>(types.modifyCurrent, user);
export const fetchUsers = () => create(types.requestUsers);

export const types = {
  add: "USERS_ADD",
  modifyCurrent: "USERS_MODIFY",

  requestUsers: "USER_FETCH_REQUESTED",
  requestUsersSuccess: "USER_FETCH_SUCCEEDED",
  requestUsersFailure: "USER_FETCH_FAILED",
}