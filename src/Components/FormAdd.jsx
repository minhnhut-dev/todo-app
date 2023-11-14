
import React, { useContext } from 'react';
import { MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';
import { TodoContext } from '../context/todoContext';
import { generateId } from "../utils/generateID";

function FormAdd() {
  const {  dispatch } = useContext(TodoContext);
  const [titleTask, setTitleTask] = React.useState('');

  const handleTitleTaskChange = (e) => {
    const { value } = e.target;
    setTitleTask(value);
  }
  const handleAddTask = () => {
      dispatch({type: 'ADD_TODO', payload: {
      id: generateId(),
      title: titleTask,
      completed: false,
      createdAt: Date.now(),  
    }});
    setTitleTask('');
  }

  const handleAddTaskEnter = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }

  return (
    <>
      <div className="pb-2">
        <MDBCard>
          <MDBCardBody>
            <div className="d-flex flex-row align-items-center ">
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Add new..."
                onChange={(e) => handleTitleTaskChange(e)}
                value={titleTask}
                onKeyDown={(e) => handleAddTaskEnter(e)}
              />
              <div>
                <MDBBtn className='ms-2' onClick={() => handleAddTask()}>Add</MDBBtn>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default FormAdd;