import React from "react";

const Todo = (props) => {
  const classHandler = () => {
    return (props.data.completed === false ? "list-item" : "list-item completed")
  }
  return (
    <div className={classHandler()}>
      <p onClick={props.markComplete}>{props.data.value}</p>
      <button className="delete-button" onClick={props.deleteItem} >X</button>
    </div>
  )
}

export default Todo