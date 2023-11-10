import React from 'react';

import TaskItem from './TaskItem';

function ListTask({ tasks, onCompletedTask, onDeleteTask, onEditTask}) {  
  return (
    <>
      {tasks.length > 0 ? tasks.map((task, index) => (
        <TaskItem key={index} task={task} onCompletedTask={onCompletedTask} onDeleteTask={onDeleteTask} onEditTask={onEditTask}/>
      ))
        : <p className="lead text-center">No tasks found</p>}
    </>
  );
}

export default ListTask;