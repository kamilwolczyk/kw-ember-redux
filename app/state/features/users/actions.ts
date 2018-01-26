import { create } from '../../core/action';
import { IUser } from './dtos/user';

export const add = (user: IUser) => create(UsersAction.Add, user);
export const modifyCurrent = (user: IUser) => create<IUser>(UsersAction.ModifyCurrent, user);
export const fetchUsers = () => create(UsersAction.RequestUsers, null);

export enum UsersAction {
  Add = "USERS_ADD",
  ModifyCurrent = "USERS_MODIFY",

  RequestUsers = "USER_FETCH_REQUESTED",
  RequestUsersSuccess = "USER_FETCH_SUCCEEDED",
  RequestUsersFailure = "USER_FETCH_FAILED",
}