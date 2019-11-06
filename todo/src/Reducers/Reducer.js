import React, {useReducer} from 'react'

export const list = [{
    item: 'Learn about reducers',
    done: false,
    id: 3892987589
  },
  {
    item: 'Look like an idiot',
    done: true,
    id: 3984384722
}]



export const initialState = list;




export function reducer(list, action) {
  switch (action.type) {
    case 'ADDTODO':
            const newItem = {
                item: action.payload,
                done: false,
                id: Date.now()
            }
      return [...list, newItem]
      }
}

