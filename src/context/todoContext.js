import { createContext } from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "LIST_TODO":
      return state;
    case "ADD_TODO":
      const todo = action.payload;
      return [...state, todo];
    case "DELETE_TODO":
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    case "COMPLETED_TODO":
      const idCompleted = action.payload;
      return state.map((todo) => {
        if (todo.id === idCompleted) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "FILTER_BY_KEYWORD":
      const newToDo = action.payload;
      return newToDo;
    case "UPDATE_TODO_TO_LOCAL_STORAGE":
      const newTodo = action.payload;
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    default:
      return state;
  }
};

export { TodoContext, todoReducer };
