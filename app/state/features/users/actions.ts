import { Action, createAction } from '../../core/action';
import { IUser } from './dtos/user';

export enum UserAction {
  Add = "USERS_ADD",
  ModifyCurrent = "USERS_MODIFY",

  RequestUsers = "USER_FETCH_REQUESTED",
  RequestUsersSuccess = "USER_FETCH_SUCCEEDED",
  RequestUsersFailure = "USER_FETCH_FAILED",
}

export type AddAction = Action<UserAction.Add, IUser>;
export const add = (user: IUser) => createAction(UserAction.Add, user);

export type ModifyAction = Action<UserAction.ModifyCurrent, Partial<IUser>>;
export const modifyCurrent = (user: Partial<IUser>) => createAction(UserAction.ModifyCurrent, user);

export type RequestAction = Action<UserAction.RequestUsers, IUser>;
export const fetchUsers = () => createAction(UserAction.RequestUsers);

export type RequestUsersSuccessAction = Action<UserAction.RequestUsersSuccess, IUser[]>;
export const usersFetchSucceeded = (users: IUser[]) => createAction(UserAction.RequestUsersSuccess, users);

export type RequestUsersFailureAction = Action<UserAction.RequestUsersFailure, string>;
export const usersFetchFailed = (message: string) => createAction(UserAction.RequestUsersSuccess, message);
