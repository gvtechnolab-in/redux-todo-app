/*---- ./src/redux/todo/todo.actions.js ----*/
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './todo.types';

export const insertTodoItem = (item) => {
  return {
    type: ADD_TODO,
    payload: item
  };
};

export const removeTodoItem = (item) => {
  return {
    type: REMOVE_TODO,
    payload: item
  };
};

export const updateTodoItem = (id,item) => {
  return {
    type: UPDATE_TODO,
    payload: {id: id, item: item}
  };
};