import React, { useCallback } from 'react';
import clsx from 'clsx';
import {
  useRecoilState,
  useRecoilValue,
  // useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import RenderTip from '../RenderTip';
import {
  countState,
  todosState,
  commonState,
  addTodo,
  toggleTodo,
  todosCountState,
  // fetchUserDetails,
  fetchDataAction,
} from './store';

// import { type TodoType } from '../../types';

export function CountExampleComponent() {
  const [count, setCount] = useRecoilState(countState);

  // const userDetails = useRecoilValueLoadable(fetchUserDetails);
  // console.log(userDetails);

  const atIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const atDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <section data-name="CountExample">
      <RenderTip />
      <h3>count:{count}</h3>
      <button className="btn btn-primary mr-1" onClick={atIncrement}>+</button>
      <button className="btn btn-danger" onClick={atDecrement}>-</button>
    </section>
  );
}

export function TodoExampleComponent() {
  const [todos] = useRecoilState(todosState);
  const common = useRecoilValue(commonState);
  console.log(common);
  const todosCount = useRecoilValue(todosCountState);
  const recoilActionFetchData = useSetRecoilState(fetchDataAction);
  const recoilActionAddTodo = useSetRecoilState(addTodo);
  const actionToggleTodo = useSetRecoilState(toggleTodo);

  const atAddTogo = useCallback(() => {
    recoilActionAddTodo('hi');
  }, []);

  const atToggleTodo = useCallback((todoId:string) => {
    actionToggleTodo(todoId);
  }, []);

  return (
    <section
      className={clsx('recoil-component', {
        'is-loading': common.loading,
      })}
      data-name="TodoExample"
    >
      <RenderTip />
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
      <button className="btn btn-warning" onClick={recoilActionFetchData}>fetchTodo</button>
      <p>todo count: {todosCount}</p>
    </section>
  );
}
