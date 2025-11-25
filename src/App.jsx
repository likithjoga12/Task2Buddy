import React,{useState} from "react";
//import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
//import ProgressBar from "./components/ProgressBar.jsx";
import ProgressTracker from "./components/ProgressTracker.jsx";
//import { saveTasks, getTasks } from "./utils/storage.js";
import "./App.css";
export default function App() {
 const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]); // Add new task to the task list
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Update task completion status
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Remove task from the list
  };

  return (
    <div className="App">
      <h1>TaskBuddy</h1>

      <TaskForm addTask={addTask} /> 
{tasks.map((t, i) => (
  <p key={i}>
    {t.task} — {t.priority} — {t.category}
  </p>
))}

      {/* Render TaskForm component */}

      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      /> {/* Render TaskList component */}

       <ProgressTracker tasks={tasks} /> {/* Render ProgressTracker component */}
    </div>
  );
}
