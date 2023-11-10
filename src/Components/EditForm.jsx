import React from 'react';
import { MDBIcon, MDBInput, MDBListGroupItem, MDBTooltip } from 'mdb-react-ui-kit';
import moment from 'moment';

function EditForm({ setEditing, task, editing, onEditTask}) {
  const [valueEdit, setValueEdit] = React.useState(task.title);
  const handleEditTask = (taskId) => {
    onEditTask(taskId, valueEdit);
    setEditing(!editing);
  }
  return (
    <>
      <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent ">
        <MDBInput id='typeText' type='text' value={valueEdit} onChange={(e) => setValueEdit(e.target.value)}/>
      </MDBListGroupItem>
      <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
        <div className="d-flex flex-row  mb-1">
          <MDBIcon fas icon="check" className='me-2 mt-1 cursor-pointer' onClick={() => handleEditTask(task.id)}/>
          <MDBIcon fas icon="times" className='mt-1 cursor-pointer' onClick={ () => setEditing(!editing)}/>
        </div>
        <div className="text-end text-muted">
          <MDBTooltip
            tag="a"
            wrapperProps={{ href: "#!" }}
            title="Created date"
          >
            <p className="small text-muted mb-0">
              <MDBIcon fas icon="info-circle" className="me-2" />
              {moment(task.createdAt).format('DD/MM/YYYY')}
            </p>
          </MDBTooltip>
        </div>
      </MDBListGroupItem>
    </>
  );
}

export default EditForm;