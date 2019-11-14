import React, { useReducer } from "react";

export const list = [
  {
    item: "Learn about reducers",
    done: false,
    id: 3892987589
  },
  {
    item: "Look like an idiot",
    done: false,
    id: 3984384722
  }
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
