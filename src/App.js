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

  return (
    <div className="App container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
