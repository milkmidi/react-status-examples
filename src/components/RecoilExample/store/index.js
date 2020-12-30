import {
  atom,
  selector,
} from 'recoil';
// import { TodoType } from '../../../types';
// import fetchData from '../../../services/api';

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

export const fetchUserDetails = selector({
  key: 'userDetailsSelector',
  get: async ({ get }) => { // eslint-disable-line
    const url = 'https://reqres.in/api/users?page=1';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
});
