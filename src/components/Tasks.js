import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Meeting at George St", day: "Feb 6th at 2:00pm", reminder: true },
    { id: 2, text: "Check Email", day: "Feb 8th at 10:30am", reminder: true },
    { id: 3, text: "Shopping", day: "Feb 9th at 3:40pm", reminder: false },
  ]);

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
