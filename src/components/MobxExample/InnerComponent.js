import React, { useCallback } from 'react';
import { useObserver } from 'mobx-react';
import clsx from 'clsx';
import { useStoreContext } from './store';

export function CountExampleComponent() {
  const { count } = useStoreContext();

  return useObserver(() => (
    <section data-name="CountExample">
      <h3>count:{count.number}</h3>
      <button className="btn btn-primary mr-1" onClick={() => count.onIncrement()}>+</button>
      <button className="btn btn-danger" onClick={() => count.onDecrement()}>-</button>
    </section>
  ));
}

let id = 0;
export function TodoExampleComponent() {
  const { todo } = useStoreContext();
  const { todos } = todo;

  const atAddTogo = useCallback(() => {
    id += 1;
    todo.addTodo(`hi, Mobx${id}`);
  }, []);

  const atToggleTodo = useCallback((todoId:string) => {
    todo.toggleTodo(todoId);
  }, []);

  return useObserver(() => (
    <section data-name="TodoExample">
      <ul>
        {todos.map((todoItem) => {
          const className = clsx('todo-item', {
            done: todoItem.done,
          });
          return (
            <li
              className={className}
              key={todoItem.id}
              onClick={() => atToggleTodo(todoItem.id)}
            >
              {todoItem.text}
            </li>
          );
        })}
      </ul>
      <button className="btn btn-info" onClick={atAddTogo}>
        add todo
      </button>
      <p>{`${todo.remainingTodosCount}/${todo.todoCount}`}</p>
    </section>
  ));
}
