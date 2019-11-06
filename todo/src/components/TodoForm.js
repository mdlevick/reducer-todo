import React, {useReducer, useState} from "react";
import TodoList from "./TodoList";
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
 
  
    console.log("rendering form");
    return (
        <div>
        <TodoList newList={state}/>
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
      </div>
    );

}

export default TodoForm;
