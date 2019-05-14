import { ADD_ITEM, MARK_COMPLETE, DELETE_ITEM, CLEAR_COMPLETE } from "../actions";

const initState = {
  todos: [
    {value: "do a thing", completed: false, id: 12345},
    {value: "do another thing", completed: false, id: 12346},
    {value: "do a third thing", completed: false, id: 12347}
  ]
}

export default (state = initState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todos: [...state.todos, {value: action.payload, completed: false, id: Date.now()}]
      }
    case MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id === action.payload) {
            return {value: item.value, completed: !item.completed, id: item.id}
          } else {
            return item
          }
        })
      }
    case DELETE_ITEM:
    return {
      ...state,
      todos: state.todos.filter(item => {
        return (item.id !== action.payload)
      })
    }
    case CLEAR_COMPLETE:
    return {
      ...state,
      todos: state.todos.filter(item => {
        return (item.completed === false)
      })
    }
    default:
      return state;
  }
}