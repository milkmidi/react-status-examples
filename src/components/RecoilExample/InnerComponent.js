import React, { useCallback } from 'react';
import clsx from 'clsx';
import {
  useRecoilState,
  useRecoilValue,
  // useSetRecoilState,
} from 'recoil';
import { countState, todosState, todosCountState } from './store';
// import { type TodoType } from '../../types';

export function CountExampleComponent() {
  const [count, setCount] = useRecoilState(countState);

  const atIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const atDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
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
  const [todos, setTodos] = useRecoilState(todosState);
  const todosCount = useRecoilValue(todosCountState);

  const atAddTogo = useCallback(() => {
    id += 1;
    setTodos((oldTodoList) => [
      ...oldTodoList,
      {
        id: id.toString(),
        text: `hi, recoil${id}`,
        done: false,
      },
    ]);
  }, []);

  const atToggleTodo = useCallback((todoId:string) => {
    setTodos((prevTodos) => {
      const newList = prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
      return newList;
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
      <button className="btn btn-info mr-2" onClick={atAddTogo}>
        add todo
      </button>
      <p>todo count: {todosCount}</p>
    </section>
  );
}
