import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Meeting at George St", day: "Feb 6th at 2:00pm", reminder: true },
    { id: 2, text: "Check Email", day: "Feb 8th at 10:30am", reminder: true },
    { id: 3, text: "Shopping", day: "Feb 9th at 3:40pm", reminder: false },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder} : task)));
  };

  return (
    <div className="App container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Task To Show!"}
    </div>
  );
}

export default App;
