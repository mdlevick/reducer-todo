import React, {useReducer} from "react";
import {reducer, initialState, list} from "../Reducers/Reducer"

import Todo from "./Todo";

const TodoList = (props) => {
    console.log(props);
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="todoList">
        {
          props.newList.map(todo => (
        <Todo key={todo.id} todo={todo.item} />
      ))}
      <button className="clear-btn" >
        Clear Done
      </button>
    </div>
  );
};

export default TodoList;