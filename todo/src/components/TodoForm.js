import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  changeHandler = ev => {
    this.setState({input: ev.target.value})
  }

  clickHandler = ev => {
    ev.preventDefault();
    this.props.addItem(this.state.input)
    this.setState({input: ""})
  }

  render() {
    return (
      <form action="">
        <input type="text" placeholder="WRITE ITEM HERE" value={this.state.input} onChange={this.changeHandler}/>
        <button onClick={this.clickHandler}>submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, { addItem })(TodoContainer);
