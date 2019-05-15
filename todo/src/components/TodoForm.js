import React from "react";
import { connect } from "react-redux";
import { addItem, clearComplete } from "../actions";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  changeHandler = ev => {
    this.setState({ input: ev.target.value });
  };

  submitHandler = ev => {
    ev.preventDefault();
    if (this.state.input === "") {return};
    this.props.addItem(this.state.input);
    this.setState({ input: "" });
  };

  clearAllHandler = ev => {
    ev.preventDefault();
    this.props.clearComplete();
  };

  render() {
    return (
      <form className="TodoForm" onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="...add an item"
          value={this.state.input}
          onChange={this.changeHandler}
        />
        <button onClick={this.submitHandler}>submit</button>
        <button onClick={this.clearAllHandler}>clear all completed</button>
      </form>
    );
  }
}

export default connect(null, { addItem, clearComplete })(TodoContainer);