import { useEffect, useReducer, useState } from "react";
import "./Tasks.css";
const STATE_SAVED_AT = "state1"
function createActionToCreateTask(title, description) {
  return {
    type: "CREATE_TASK",
    payload: {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    },
  };
}

function createActionToggleCompleted(id) {
  return {
    type: "TOGGLE_COMPLETED",
    id,
  };
}

const initialState = {
  tasks: [{
    id: 1,
    title: "Botón para borrar completadas",
    description: "",
    completed: false,
  }, {
    id: 2,
    title: "Botón para borrar todas",
    description: "",
    completed: false,
  }, {
    id: 3,
    title: "editar tarea",
    description: "esta para el 10",
    completed: false,
  }, {
    id: 4,
    title: "Persistir en localstorage",
    description: "esta para el 10",
  }, {
    id: 5,
    title: "Crear un subcomponente para cada tarea",
    description: "esta para el 7",
  }, {
    id: 6,
    title: "Gestión de importancia de la tareas",
  }, {
    id: 7,
    title: "validar que exista título",
    description: "y borrar los inputs al añadir tarea",
  }],
};

const savedState = JSON.parse(localStorage.getItem(STATE_SAVED_AT)) ?? initialState;
console.log(savedState);

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        }),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case "DELETE_COMPLETED_TASKS":
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed),
      };
    default:
      // return state;
      return { ...state };
      //   throw new Error("Unexpected action type" + action.type);
  }
}

function Tasks(props) {
  const [state, dispatch] = useReducer(reducer, savedState);
  useEffect(() => {
    console.log("useEffect", state);
    localStorage.setItem(STATE_SAVED_AT, JSON.stringify(state));
  }, [JSON.stringify(state)]);

  function createTask(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    dispatch(createActionToCreateTask(title, description));
  }
  function toggleCompleted(id) {
    dispatch(createActionToggleCompleted(id));
  }
  function deleteTask(id) {
    dispatch({
      type: "DELETE_TASK",
      id,
    });
  }
  return (
    <div>
      <section className="addTask">
        <form onSubmit={createTask}>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="description" placeholder="description" />
          <button>Add Task</button>
        </form>
      </section>
      <section className="tasks">
        {state.tasks.map((task) => (
          <div
            className={"task " + (task.completed ? "completed" : "uncompleted")}
            key={task.id}
          >
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <div className="actions">
              <button
                className="toggleComplete"
                onClick={() => toggleCompleted(task.id)}
              >
                {task.completed ? "Uncomplete" : "Complete"}
              </button>
              <button className="trash" onClick={() => deleteTask(task.id)}>
                🗑
              </button>
              <button onClick={() => dispatch({ type: "unknown" })}>
                do nothing
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Tasks;
