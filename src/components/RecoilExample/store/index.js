// @flow
// https://dev.to/yoniweisbrod/when-to-use-writeable-selectors-in-recoiljs-45b2
import {
  atom,
  selector,
  // useRecoilCallback,
} from 'recoil';
import { TodoType } from '../../../types';
import fetchData from '../../../services/api';

export const commonState = atom({
  key: 'common',
  default: {
    loading: false,
    userName: 'milkmidi',
  },
});

export const actionCommonLoading = selector({
  key: 'actionCommonLoading',
  set({ set, get }, isLoading:boolean) {
    console.log('actionCommonLoading', isLoading);
    set(commonState, {
      ...get(commonState),
      loading: isLoading,
    });
  },
});

export const countState = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 10, // default value (aka initial value)
});

export const todosState = atom({
  key: 'todosState',
  default: [{
    id: 'fakeId',
    text: 'react',
    done: false,
  }],
});

export const todosCountState = selector({
  key: 'todosCountState',
  get: ({ get }) => {
    const todos = get(todosState);
    return todos.length;
  },
});

let id = 0;
export const addTodo = selector({
  key: 'addTodo',
  set: ({ set, get }, newTodoText:string) => {
    id += 1;
    const newTodo = {
      id: id.toString(),
      text: newTodoText,
      done: false,
    };
    set(todosState, [...get(todosState), newTodo]);
  },
});

export const toggleTodo = selector<string>({
  key: 'toggleTodo',
  set({ set, get }, todoId:string) {
    const todos = get(todosState);
    const newList = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    set(todosState, newList);
  },
});

export const fetchUserDetails = selector({
  key: 'userDetailsSelector',
  get: async ({ get }) => { // eslint-disable-line
    const url = 'https://reqres.in/api/users?page=1';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
});

export const fetchDataAction = selector({
  key: 'fetchDataAction',
  set: async ({ set, get }) => {
    const currentTodos = get(todosState);
    set(actionCommonLoading, true);
    // not working ????????
    const newTodo:TodoType = await fetchData();
    console.log('recoilActionFetchData', newTodo);
    console.log(...get(todosState));
    set(todosState, [...currentTodos, newTodo]);
    setTimeout(() => {
      set(actionCommonLoading, false);
    }, 500);
  },
});

/* export const fetchDataAction = useRecoilCallback(({ set, get }) => async () => {
  set(actionCommonLoading, true);
  const currentTodos = get(todosState);
  const newTodo:TodoType = await fetchData();
  console.log('recoilActionFetchData', newTodo);
  set(todosState, [...currentTodos, newTodo]);
  set(actionCommonLoading, false);
}, []); */
