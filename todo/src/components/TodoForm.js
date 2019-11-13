import React, {useReducer, useState} from "react";
import TodoList from "./TodoList";
import "../Todo.css"
import {reducer, initialState} from "../Reducers/Reducer"

const TodoForm = () => {
  
    const [state, dispatch] = useReducer(reducer, initialState)
   const [input, setInput] = useState('')
const handleChange = e => {
    setInput(e.target.value);
}

const handleSubmit = e => {
e.preventDefault();
dispatch({ type: "ADDTODO", payload: input})
setInput('')
}
 
const toggleDone = id => {
    dispatch({ type: "TOGGLE", payload: id})
  };
  
  const clearDone = e => {
e.preventDefault();
dispatch({type: "CLEAR"})

  }
    console.log("rendering form");
    return (
        <div>
        <TodoList newList={state} toggleDone={toggleDone}/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">New Todo:  </label>
        <input
          type="text"
          name="todoInput"
          id="todo"
          value={input}
          onChange={handleChange}
          
        />
        <button>Add</button>
      </form>
      <button className="clear-btn" onClick={clearDone}>
        Clear Done
      </button>
      </div>
    );

}

export default TodoForm;
