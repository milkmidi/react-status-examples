import { Store, registerInDevtools } from 'pullstate';
import { TodoType } from '../../../types';

export type TodoStoreType = {
  todos: TodoType[]
}

const initialState:TodoType[] = [
  { id: 'fakeId0', text: '學會 Vue', done: true },
  { id: 'fakdId1', text: '年薪百萬', done: false },
];
export const TodoStore:Store<TodoStoreType> = new Store({
  todos: initialState,
});

export type CountStoreType = {
  count: number;
}
export const CountStore:Store<CountStoreType> = new Store({
  count: 10,
});

registerInDevtools({
  CountStore,
  TodoStore,
});
