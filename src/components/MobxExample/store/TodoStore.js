import { makeAutoObservable } from 'mobx';
import { type TodoType } from '../../../types';

class TodoStore {
  todos = [
    {
      id: 'fakeId0',
      text: '學會 React',
      done: true,
    },
    {
      id: 'fakeId1',
      text: '年新百萬',
      done: false,
    },
  ]

  constructor() {
    makeAutoObservable(this);
  }

  get todoCount():number[] {
    return this.todos.length;
  }

  get remainingTodosCount():number {
    return this.todos.filter((o) => o.done).length;
  }

  addTodo(text:string) {
    this.todos.push({
      id: Math.random().toString(32).substr(2),
      done: false,
      text,
    });
  }

  toggleTodo(id:string) {
    for (let i = 0; i < this.todos.length; i += 1) {
      const todo:TodoType = this.todos[i];
      if (todo.id === id) {
        todo.done = !todo.done;
        break;
      }
    }
  }

  fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('ok');
        this.addTodo('fetch');
      }, 1500);
    });
  }
}
export default TodoStore;
