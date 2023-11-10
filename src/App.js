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
import { generateId } from "./utils/generateID";
import "./App.css";

localStorage.getItem("todos") ||
  localStorage.setItem("todos", JSON.stringify(data));

export default function App() {
  let listTasksFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
  const [tasks, setTasks] = React.useState(listTasksFromLocalStorage);
  const [originalTasks] = React.useState([...tasks]);

  const onAddTask = (task) => {
    if (task.trim() === "") return;
    const newTasks = [
      ...tasks,
      {
        id: generateId(),
        title: task,
        completed: false,
        createdAt: Date.now(),
      },
    ];
    setTasks(newTasks);
    localStorage.setItem("todos", JSON.stringify(newTasks));
  };

  const onFilterTask = (keyword) => {
    if (keyword.trim() === "") {
      setTasks(originalTasks);
    } else {
      let tasksFilter = originalTasks.filter((task) =>
        task.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setTasks(tasksFilter);
    }
  };

  const onDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("todos", JSON.stringify(newTasks));
  }

  const onCompletedTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem("todos", JSON.stringify(newTasks));
  }

  const onEditTask = (id, newTitle) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: newTitle};
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem("todos", JSON.stringify(newTasks));
  }

  return (
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
              <FormAdd onAddTask={onAddTask} />
              <hr className="my-4" />
              <FilterTask onFilterTask={onFilterTask} />
              <ListTask tasks={tasks} onCompletedTask={onCompletedTask} onDeleteTask={onDeleteTask} onEditTask={onEditTask}/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
