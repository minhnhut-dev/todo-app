import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import FilterTask from "./Components/FilterTask";
import FormAdd from "./Components/FormAdd";
import ListTask from "./Components/ListTask";
import { data } from "./utils/data";
import "./App.css";
import TodoProvider from "./Provider/todoProvider";
import FirstLayout from "./layouts/FirstLayout";

localStorage.getItem("todos") ||
  localStorage.setItem("todos", JSON.stringify(data));

export default function App() {
  let listTasksFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
  const [tasks, setTasks] = React.useState(listTasksFromLocalStorage);
  
  const onEditTask = (id, newTitle) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem("todos", JSON.stringify(newTasks));
  }

  return (
    <FirstLayout>
      <TodoProvider>
        <MDBContainer className="py-5">
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard
                id="list1"
                style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
              >
                <MDBCardBody className="py-4 px-4 px-md-5">
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <MDBIcon fas icon="check-square" className="me-1" />
                    <u>My Todo App</u>
                  </p>
                  <FormAdd />
                  <hr className="my-4" />
                  <FilterTask  />
                  <ListTask tasks={tasks} onEditTask={onEditTask} />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </TodoProvider>
    </FirstLayout>

  );
}
