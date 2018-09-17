import { StackActions, Push, Pop, Clear } from './actions';

export type IStack<T> = T[];

export const push = (state: IStack<any>, action: Push<any>) => [
  action.payload,
  ...state
];

export const pop = (state: IStack<any>, action: Pop) => {
  const newState = [...state];
  newState.shift();
  return newState;
};

export const clear = (state: IStack<any>, action: Clear) => [];

export const reducerMap = new Map<any>([
  [StackActions.PUSH, push],
  [StackActions.POP, pop],
  [StackActions.CLEAR, clear]
]);
