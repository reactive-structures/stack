import { Store, select } from '@reactive-redux/store';
import { Push, Pop, Clear } from './actions';
import { reducerMap, IStack } from './reducers';

export class Stack<T> extends Store<IStack<T>> {
  peek$ = this.state$.pipe(select(stack => stack[0]));
  size$ = this.state$.pipe(select(stack => stack.length));
  isEmpty$ = this.state$.pipe(select(stack => stack.length === 0));

  constructor(private initialStack: T[] = []) {
    super(initialStack, reducerMap);
  }

  push(data: T) {
    this.dispatch(new Push<T>(data));
  }

  pop() {
    this.dispatch(new Pop());
  }

  clear() {
    this.dispatch(new Clear());
  }
}
