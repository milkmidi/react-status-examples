import React, { useCallback } from 'react';
import clsx from 'clsx';
import { CountStore, TodoStore } from './store';
import { type TodoType } from '../../types';

export function CountExampleComponent() {
  const count:number = CountStore.useState((s) => s.count);

  const atIncrement = useCallback(() => {
    CountStore.update((s) => {
      s.count += 1;
    });
  }, []);

  const atDecrement = useCallback(() => {
    CountStore.update((s) => {
      s.count -= 1;
    });
  }, []);

  return (
    <section data-name="CountExample">
      <h3>count:{count}</h3>
      <button className="btn btn-primary mr-1" onClick={atIncrement}>+</button>
      <button className="btn btn-danger" onClick={atDecrement}>-</button>
    </section>
  );
}

let id = 0;
export function TodoExampleComponent() {
  const todos:TodoType[] = TodoStore.useState((s) => s.todos);

  const atAddTogo = useCallback(() => {
    id += 1;
    TodoStore.update((s) => {
      s.todos.push({ // 直接 push, 不需要產生新的 instance
        id: id.toString(),
        text: `hi, pullstate${id}`,
        done: false,
      });
    });
  }, []);

  const atToggleTodo = useCallback((todoId:string) => {
    TodoStore.update((s) => {
      for (let i = 0; i < s.todos.length; i++) {
        const todo = s.todos[i];
        if (todo.id === todoId) {
          todo.done = !todo.done; // 直接修改，不需要產生新的 instance
          break;
        }
      }
    });
  }, []);

  return (
    <section data-name="TodoExample">
      <ul>
        {todos.map((todo) => {
          const className = clsx('todo-item', {
            done: todo.done,
          });
          return (
            <li
              className={className}
              key={todo.id}
              onClick={() => atToggleTodo(todo.id)}
            >
              {todo.text}
            </li>
          );
        })}
      </ul>
      <button className="btn btn-info" onClick={atAddTogo}>
        add todo
      </button>
    </section>
  );
}
