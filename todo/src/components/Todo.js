import React from "react";
import "../Todo.css";
const Todo = props => {
  return (
    <div 
    className={`Todo ${props.todo.done ? " done" : ""}`}
    onClick={() => props.toggleDone(props.todo.id)}
    >
      
    
 
      <p>{props.todo.item}</p>
      {console.log(props)}
    </div>
  );
};

export default Todo;
