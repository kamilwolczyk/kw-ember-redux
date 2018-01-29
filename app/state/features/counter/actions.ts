import { Action, createAction } from '../../core/action';

export enum CounterAction {
  Add = "COUNTER_ADD",
  Subtract = "COUNTER_SUBTRACT"
}

export type AddAction = Action<CounterAction.Add, number>;
export const add = (value: number) => createAction(CounterAction.Add, value);

export type SubtractAction = Action<CounterAction.Subtract, number>;
export const subtract = (value: number) => createAction(CounterAction.Subtract, value);
