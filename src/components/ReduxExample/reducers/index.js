import { combineReducers } from 'redux';
import todos from './todos';
import count from './count';
import { TodoType } from '../../../types';

export type State = {
  count: number;
  todos: TodoType[];
}

const todoApp = combineReducers({
  todos,
  count,
});

export default todoApp;
