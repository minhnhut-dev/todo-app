import React, { useEffect, useReducer } from "react";
import { TodoContext, todoReducer } from "../context/todoContext";
import { data } from "../utils/data";

localStorage.getItem("todos") ||
  localStorage.setItem("todos", JSON.stringify(data));

const TodoProvider = ({ children }) => {
  let listTasksFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
  const [state, dispatch] = useReducer(todoReducer, listTasksFromLocalStorage);

  useEffect(() => {
    dispatch({type: "UPDATE_TODO_TO_LOCAL_STORAGE", payload: state})
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;