import React, { useCallback } from 'react';
import clsx from 'clsx';
import { useProxy } from 'valtio';
import {
  todoState,
  useCountState,
  useTodoState,
} from './store';

export function CountExampleComponent() {
  const {
    snapshot,
    onIncrement,
    onDecrement,
  } = useCountState();

  return (
    <section data-name="CountExample">
      <h3>count:{snapshot.count}</h3>
      <button className="btn btn-primary mr-1" onClick={onIncrement}>+</button>
      <button className="btn btn-danger" onClick={onDecrement}>-</button>
    </section>
  );
}

let id = 0;
export function TodoExampleComponent() {
  const todoSnapshot = useProxy(todoState);

  const { onFetch } = useTodoState();

  const atAddTogo = useCallback(() => {
    id += 1;
    todoState.todos.push({ // 直接 push, 不需要產生新的 instance
      id: id.toString(),
      text: `hi, pullstate${id}`,
      done: false,
    });
  }, []);

  const atToggleTodo = useCallback((todoId:string) => {
    const { todos } = todoState;
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      if (todo.id === todoId) {
        todo.done = !todo.done; // 直接修改，不需要產生新的 instance
        break;
      }
    }
  }, []);

  return (
    <section data-name="TodoExample">
      <ul>
        {todoSnapshot.todos.map((todo) => {
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
      <button className="btn btn-warning" onClick={onFetch}>fetch</button>
    </section>
  );
}
