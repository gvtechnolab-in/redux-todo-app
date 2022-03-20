/*---- ./src/redux/todo/todo.reducer.js ----*/
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./todo.types";
const INITIAL_STATE = {
  todoList: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      const lastId = new Date().valueOf();
      return {
          ...state,
          todoList: [
              ...state.todoList,
              { id: lastId, name: action.payload, status: "new" },
            ],
        };
        case REMOVE_TODO:
        console.log("add action", action);
      return {
        ...state,
        todoList: [
          ...state.todoList.filter(
            (todoitem) => todoitem.id !== action.payload.id
          ),
        ],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todoitem) =>
            todoitem.id === action.payload.id ? action.payload.item : todoitem
          ),
        ],
      };
    default:
      return state;
  }
};

export default todoReducer;
