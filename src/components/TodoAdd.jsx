import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import '../App.css'

export default function Add({ setData }) {
  const navigate = useNavigate();
  const [task, setTask] = useState("");

  const inputTaskHandler = () => {
    const newData = { 
      id: Math.random() * 100, 
      task, 
      complete: false };
    setData((data) => [...data, newData]);
    navigate("/");
  }

  const onChange = (e) => {
    setTask(e.target.value);
  }

  return (
    <div>
      <h1>Todo Input</h1>
      <form className="container add__container">
        <input type="text" value={task} onChange={onChange} placeholder="Input Todo ..." required />
        <button onClick={inputTaskHandler} className="btn adds">Submit</button>
        <Link to="/" className='btn adds'>cancel</Link>
      </form>
    </div>
  );
}
