import { TODO } from "../constants/todo";

export const addTodo = (todoItem) => {
    console.log(todoItem);
  return {
    type: TODO.ADD_TODO,
    payload: { ...todoItem },
  };
};

export const deleteTodo = (id) => {
  return {
    type: TODO.REMOVE_TODO,
       payload: {
        id
       },
  };
};


export const checkedTodo = (todoItem) => {
  return {
    type: TODO.CHECKED_TODO,
    payload: { ...todoItem },
  };
};
export const saveTodo = (todoItem) => {
  return {
    type: TODO.SAVE_TODO,
    payload: todoItem,
  };
};