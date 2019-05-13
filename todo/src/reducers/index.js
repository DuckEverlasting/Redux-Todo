import { ADD_ITEM } from "../actions";

const initState = {
  todos: [
    {value: "do a thing", completed: false},
    {value: "do another thing", completed: false},
    {value: "do a third thing", completed: false}
  ]
}

export default (state = initState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      return state;
  }
}