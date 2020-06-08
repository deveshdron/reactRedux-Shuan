import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    todo: { id: null, content: null },
  };

  handleChange = (e) => {
    this.setState({
      todo: { id: Math.random(), [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
  };

  render() {
    return (
      <div>
        <h2 className="teal-text center">Add some task todo</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="content" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default AddTodo;
