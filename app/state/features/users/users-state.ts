import { User } from "./dtos/user";

export interface UsersState {
  current: User,
  users: User[]
}

export const initialState: UsersState = {
  current: {
    firstName: "",
    lastName: ""
  },
  users: []
}