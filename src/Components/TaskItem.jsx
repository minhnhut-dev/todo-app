import React from 'react';
import { MDBCheckbox, MDBIcon,  MDBListGroup, MDBListGroupItem, MDBTooltip } from 'mdb-react-ui-kit';
import moment from 'moment';
import EditForm from './EditForm';
import { TodoContext } from '../context/todoContext';

function TaskItem({ task, onCompletedTask, onEditTask}) {
  const [editing, setEditing] = React.useState(false);
  const { dispatch } = React.useContext(TodoContext);

  const handleDeleteTask = (id) => {
    dispatch({type: 'DELETE_TODO', payload: id});
  }

  const handleCompleteTask = (id) => {
    dispatch({type: 'COMPLETED_TODO', payload: id});
  }
  
  return (
    <>
      <MDBListGroup horizontal className="rounded-0 bg-transparent">
        {editing ? <EditForm setEditing={setEditing} task={task} editing={editing} onEditTask={onEditTask}/> :
          <>
            <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
              <MDBCheckbox
                name="flexCheck"
                value={task.id}
                id="flexCheckChecked"
                checked={task.completed}
                onChange={() => { handleCompleteTask(task.id) }}
                disabled={task.completed}
              />
            </MDBListGroupItem>
            <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent ">
              <p className="lead fw-normal mb-0" style={task.completed ? { textDecoration: 'line-through' } : {}}>
                {task.title}
              </p>
            </MDBListGroupItem>
            <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
              <div className="d-flex flex-row justify-content-end mb-1">
                {!task.completed && <MDBTooltip
                  tag="a"
                  wrapperProps={{ href: "#!" }}
                  title="Edit todo"
                >
                  <MDBIcon
                    fas
                    icon="pencil-alt"
                    className="me-3"
                    color="info"
                    onClick={() => setEditing(!editing)}
                  />
                </MDBTooltip>}

                <MDBTooltip
                  role="button"
                  tag="a"
                  title="Delete todo"
                >
                  <MDBIcon fas icon="trash-alt" color="danger" onClick={() => handleDeleteTask(task.id)} className='cursor-pointer'/>
                </MDBTooltip>
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
        }

      </MDBListGroup>
    </>
  );
}

export default TaskItem;