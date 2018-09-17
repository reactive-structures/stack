import { Action } from '@reactive-redux/store';

export enum StackActions {
  PUSH = '[Stack] Push item',
  POP = '[Stack] Pop item',
  CLEAR = '[Stack] Clear stack'
}

export class Push<T> implements Action {
  readonly type = StackActions.PUSH;

  constructor(public payload: T) {}
}

export class Pop implements Action {
  readonly type = StackActions.POP;
}

export class Clear implements Action {
  readonly type = StackActions.CLEAR;
}
