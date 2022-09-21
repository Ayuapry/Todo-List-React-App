import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Edit({ setData, data }) {
  const { id } = useParams();
  const item = data.find((el) => el.id === id);

  const navigate = useNavigate();
  const [task, setTask] = useState(item.task);

  const editTaskHandler =() => {
    const newTask = { id: id, task: task, complete: false };
    setData((data) => [...data, newTask]);
    navigate("/");
  }
  return (
    <div>
      <div>
        <h1>Todo Edit</h1>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Input/Edit Todo"
          />
          <button onClick={editTaskHandler}> Submit</button>
      </div>
    </div>
  );
}
