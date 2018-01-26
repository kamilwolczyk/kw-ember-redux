import { create } from '../../core/action';

export const add = (value: number) => create<number>(types.add, value);
export const subtract = (value: number) => create<number>(types.subtract, value);

export const types = {
  add: "COUNTER_ADD",
  subtract: "COUNTER_SUBTRACT"
};