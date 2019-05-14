import React from "react";
import { connect } from "react-redux";
import { markComplete, deleteItem } from "../actions";
import Todo from "./Todo.js";

class TodoContainer extends React.Component {
  render() {
    return (
      <div className="TodoContainer">
        {this.props.todos.map(el => (
          <Todo data={el} markComplete={() => this.props.markComplete(el.id)} deleteItem={() => this.props.deleteItem(el.id)}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { markComplete, deleteItem }
)(TodoContainer);
