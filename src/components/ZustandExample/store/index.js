import create from 'zustand';
// import { TodoType } from '../../../types';

export const useCountStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

const initialState = [
  {
    id: 'fakeId0',
    text: '學會  React',
    done: true,
  },
  {
    id: 'fakdId1',
    text: '年薪百萬',
    done: false,
  },
];

let id = 0;
export const useTodoStore = create((set) => ({
  todos: initialState,
  addTodo: (text:string) => set((state) => {
    id += 1;
    state.todos.push({
      id,
      text,
      done: false,
    });
  }),
  toggleTodo: (todoId:string) => set((state) => {
    for (let i = 0; i < state.todos.length; i++) {
      const todo = state.todos[i];
      if (todo.id === todoId) {
        todo.done = !todo.done; // 直接修改，不需要產生新的 instance
        break;
      }
    }
  }),
}));
