
import React from 'react';
import { MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';

function FormAdd({ onAddTask }) {
  const [titleTask, setTitleTask] = React.useState('');

  const handleTitleTaskChange = (e) => {
    const { value } = e.target;
    setTitleTask(value);
  }
  const handleAddTask = () => {
    onAddTask(titleTask);
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