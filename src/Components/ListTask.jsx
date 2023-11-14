import React, { useContext } from 'react';

import TaskItem from './TaskItem';
import { TodoContext } from '../context/todoContext';
function ListTask({ onEditTask}) {  
  const { state } = useContext(TodoContext);
  return (
    <>
      {state.length > 0 ? state.map((task, index) => (
        <TaskItem key={index} task={task} onEditTask={onEditTask}/>
      ))
        : <p className="lead text-center">No tasks found</p>}
    </>
  );
}

export default ListTask;