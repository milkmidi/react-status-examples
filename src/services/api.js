import { TodoType } from '../types';

export default function fetchData():Promise<TodoType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: `fetchId${+new Date()}`,
        text: 'fetchData',
        done: false,
      });
    }, 1000);
  });
}
