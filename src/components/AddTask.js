import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add task");
    } else {

      onAdd({ text, day, reminder });

      setText("");
      setDay("");
      setReminder(false);
    }
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Add task" />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input value={day} onChange={(e) => setDay(e.target.value)} type="datetime-local" placeholder="Add Day & time" />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} type="checkbox" checked={reminder} />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
