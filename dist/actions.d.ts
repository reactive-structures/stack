import { Action } from '@reactive-redux/store';
export declare enum StackActions {
    PUSH = "[Stack] Push item",
    POP = "[Stack] Pop item",
    CLEAR = "[Stack] Clear stack"
}
export declare class Push<T> implements Action {
    payload: T;
    readonly type: StackActions;
    constructor(payload: T);
}
export declare class Pop implements Action {
    readonly type: StackActions;
}
export declare class Clear implements Action {
    readonly type: StackActions;
}
