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

export function reducer(list, action) {
  switch (action.type) {
    case "ADDTODO":
      const newItem = {
        item: action.payload,
        done: false,
        id: Date.now()
      };
      if (newItem.item === ""){
          return list
      }else {
      return [...list, newItem];}

    case "TOGGLE":
      return list.map(comp => {
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
          return list.filter(item => {
            if (item.done === false) {
              return item;
            }
          })
  }
}
