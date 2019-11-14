import React, {useReducer} from "react";


import Todo from "./Todo";

const TodoList = (props) => {
    console.log(props);
    
  return (
    <div className="todoList">
        {
          props.newList.map(todo => (
        <Todo key={todo.id} todo={todo} toggleDone={props.toggleDone} />
      ))}
   
    </div>
  );
};

export default TodoList;