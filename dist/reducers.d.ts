import { Push, Pop, Clear } from './actions';
export declare type IStack<T> = T[];
export declare const push: (state: any[], action: Push<any>) => any[];
export declare const pop: (state: any[], action: Pop) => any[];
export declare const clear: (state: any[], action: Clear) => any[];
export declare const reducerMap: Map<any, any>;
