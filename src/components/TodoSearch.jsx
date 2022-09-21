import React from "react";
import {Link} from 'react-router-dom'


export default function TodoSearch({ search, setSearch, filter }) {
  const onChange = (e) => {
    setSearch(e.target.value);
  }

  return (
      // <div className="container top__container">
      //   <div className="top__left">
      //     <div>
      //       <input 
      //         type="text"
      //         placeholder="Search Todo ..."
      //         value={search}
      //         onChange={onChange}
      //       />
      //                 </div>
      //       <button className="btn lg" onClick={() => filter("search")}>search</button>
      //     <div className="top__right">
      //       <Link to="/TodoAdd" className="btn md">Add New Task</Link>
      //     </div>
      //   </div>
      //   </div>


    <div className='container top__container'>
        <div class="top__left">
            <div>
            <input 
               type="text"
              placeholder="Search Todo ..."
              value={search}
              onChange={onChange}
            />
                {/* <input type="text" placeholder="Search" />
                {/* {data.map((val, key) => {
                    return (
                        <div className="todo" key={key}>
                            <p>{val.task}</p>
                        </div>
                    );
                })} */} 
            </div>
            <button className="btn lg" onClick={() => filter("search")}>search</button>
        </div>
        <div className="top__right">
            <Link to="/TodoAdd" className="btn md">Add New Task</Link>
        </div>
    </div>



  );
}
