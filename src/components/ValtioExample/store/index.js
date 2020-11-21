import { proxy, useProxy } from 'valtio';
import fetchData from '../../../services/api';
import { TodoType } from '../../../types';

export const countState = proxy({ count: 0 });

export const useCountState = () => ({
  snapshot: useProxy(countState),
  onIncrement: () => {
    countState.count += 1;
  },
  onDecrement: () => {
    countState.count += 1;
  },
});

const initialState:TodoType[] = [
  { id: 'fakeId0', text: '學會 Vue', done: true },
  { id: 'fakdId1', text: '年薪百萬', done: false },
];
export const todoState = proxy({
  todos: initialState,
});

export const useTodoState = () => ({
  snapshot: useProxy(todoState),
  onFetch: async () => {
    const result = await fetchData();
    todoState.todos.push(result);
  },
});
