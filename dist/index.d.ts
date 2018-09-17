import { Store } from '@reactive-redux/store';
import { IStack } from './reducers';
export declare class Stack<T> extends Store<IStack<T>> {
    private initialStack;
    peek$: import("rxjs/internal/Observable").Observable<T>;
    size$: import("rxjs/internal/Observable").Observable<number>;
    isEmpty$: import("rxjs/internal/Observable").Observable<boolean>;
    constructor(initialStack?: T[]);
    push(data: T): void;
    pop(): void;
    clear(): void;
}
