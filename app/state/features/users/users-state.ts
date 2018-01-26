import { IUser } from "./dtos/user";

export interface UsersState {
  current: IUser,
  users: IUser[]
}

export const initialState: UsersState = {
  current: {
    firstName: "",
    lastName: ""
  },
  users: []
}