import React, { useReducer } from "react";

export const list = [
  {
    item: "Find a Job",
    done: false,
    id: 3892987589
  },
  {
    item: "Do What I Love",
    done: false,
    id: 3892987590
  },
  {
    item: "Make Good Money",
    done: false,
    id: 3892987591
  },
];

export const initialState = list;

export function reducer(state, action) {
  switch (action.type) {
    case "ADDTODO":
      const newItem = {
        item: action.payload,
        done: false,
        id: Date.now()
      };
      if (newItem.item === ""){
          return state
      }else {
      return [...state, newItem];}

    case "TOGGLE":
      return state.map(comp => {
        if (comp.id === action.payload) {
          return {
            ...comp,
            done: !comp.done
          };
        } else {
          return comp;
        }
      });
      case "CLEAR":
          return state.filter(item => {
            if (item.done === false) {
              return item;
            }
           
          }) 
        case "default":
                return state;
  }
}
