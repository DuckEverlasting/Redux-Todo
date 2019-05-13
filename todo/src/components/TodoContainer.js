import React from "react";
import { connect } from "react-redux"
import Todo from "./Todo.js";

class TodoContainer extends React.Component {
  render(){
    return (
      <div className="TodoContainer">
        {this.props.todos.map(el => <Todo text={el.value}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoContainer)