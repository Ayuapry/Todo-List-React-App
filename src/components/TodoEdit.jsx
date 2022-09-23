import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaBook } from 'react-icons/fa';
import Data from '../data.json'
import '../App.css'

export default function Edit({ setData, data }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = Data.find((item) => 
    item.id === Number(id)
  );

  const [task, setTask] = useState(item.task);
  const editTaskHandler =() => {
    const newTask = { 
      task: task, 
    };
    setData((data) => [...data, newTask]);
    navigate("/");
  }
  const onChange = (e) => {
    setTask(e.target.value);
  }

  return (
    <div>
        <h1>Todo Edit</h1>
        <div className="container add__container">
          <div className="input-container">
            <i className="icon"><FaBook /></i>
            <input type="text" value={task} onChange={onChange} placeholder="Edit Todo" />
          </div>
          <div>
            <button onClick={editTaskHandler} className="btn adds">Submit</button>
            <Link to="/" className='btn adds cancel'>cancel</Link>
          </div>
        </div>
    </div>
  );
}
