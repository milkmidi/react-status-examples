import React, { useCallback } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { type State } from './reducers';

export function CountExampleComponent() {
  const count = useSelector((state:State) => state.count);
  const dispatch = useDispatch();

  const atIncrement = useCallback(() => {
    dispatch({ type: 'INCREMENT' });
  }, [dispatch]);

  const atDecrement = useCallback(() => {
    dispatch({ type: 'DECREMENT' });
  }, [dispatch]);

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
  const todos = useSelector((state:State) => state.todos);
  const dispatch = useDispatch();

  const atAddTogo = useCallback(() => {
    id += 1;
    dispatch({ type: 'ADD_TODO', text: `hi, redux${id}` });
  }, [dispatch]);

  const atToggleTodo = useCallback((todoId:string) => {
    dispatch({ type: 'TOGGLE_TODO', id: todoId });
  }, [dispatch]);

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
