import React from "react";
import "../Todo.css";
const Todo = props => {
  return (
    <div 
    className={`Todo ${props.todo.done ? " done" : ""}`}
    onClick={() => props.toggleDone(props.todo.id)}
    >
      
    
 
      <h3>{props.todo.item}</h3>
      {console.log(props)}
    </div>
  );
};

export default Todo;
