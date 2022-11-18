import "./Task.css";
function Task({ taskData, deleteById, toggleCompletedById }) {
  return (
    <div
      className={"task " + (taskData.completed ? "completed" : "uncompleted")}
    >
      <h2>{taskData.title}</h2>
      <p>{taskData.description}</p>
      <div className="actions">
        <button
          className="toggleComplete"
          onClick={() => toggleCompletedById(taskData.id)}
        >
          {taskData.completed ? "Uncomplete" : "Complete"}
        </button>
        <button className="trash" onClick={() => deleteById(taskData.id)}>
          🗑
        </button>
      </div>
    </div>
  );
}

export default Task;
