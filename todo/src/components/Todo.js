import React from "react";
import "../Todo.css";
const Todo = props => {
  return (
    <div>
      
    
 
      <p>{props.todo}</p>
      {console.log(props.todo)}
    </div>
  );
};

export default Todo;
