import { create } from '../../core/action';

export const add = (value: number) => create<number>(CounterAction.Add, value);
export const subtract = (value: number) => create<number>(CounterAction.Subtract, value);

export enum CounterAction {
  Add = "COUNTER_ADD",
  Subtract = "COUNTER_SUBTRACT"
}