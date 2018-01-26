import { CounterState } from "./features/counter/counter-state";
import { UsersState } from "./features/users/users-state";

export interface ApplicationState {
  counters: CounterState,
  users: UsersState
}
