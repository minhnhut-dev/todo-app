import { MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { TodoContext } from '../context/todoContext';

function FilterTask() {
  const { state, dispatch } = React.useContext(TodoContext);
  const [originalTasks] = React.useState([...state]);
  const handleFilterTask = (e) => {
    const { value } = e.target;
    if(e.target.value.trim() === '') {
      dispatch({type: 'FILTER_BY_KEYWORD', payload: originalTasks});
    }else {
      const filteredTasks = originalTasks.filter(task => task.title.toLowerCase().includes(value.toLowerCase()));
      dispatch({type: 'FILTER_BY_KEYWORD', payload: filteredTasks});
    }
    console.log(state);
  }

  return (
    <>
      <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
        <p className="small mb-0 me-2 text-muted">Filter</p>
        <MDBInput
          type="text"
          placeholder="Enter the task"
          onChange={(e) => handleFilterTask(e)}
        />
      </div>
    </>
  );
}

export default FilterTask;