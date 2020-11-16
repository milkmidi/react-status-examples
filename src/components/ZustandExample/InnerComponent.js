import React, { useCallback } from 'react';
import clsx from 'clsx';
import { useCountStore, useTodoStore } from './store';

export function CountExampleComponent() {
  const { count, increment, decrement } = useCountStore();

  return (
    <section data-name="CountExample">
      <h3>count:{count}</h3>
      <button className="btn btn-primary mr-1" onClick={increment}>+</button>
      <button className="btn btn-danger" onClick={decrement}>-</button>
    </section>
  );
}

export function TodoExampleComponent() {
  const { todos, addTodo, toggleTodo } = useTodoStore();

  const atAddTogo = useCallback(() => {
    addTodo('hi, Zustand');
  }, []);

  const atToggleTodo = useCallback((todoId:string) => {
    toggleTodo(todoId);
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
