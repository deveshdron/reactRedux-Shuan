import React, { Component } from "react";
import Todo from "./Todos";

class AddTodo extends Component {
  state = {
    Todos: [{ id: "1", content: "Buy some milk" }],
  };

  handleSubmit = (e) => {
    let newTodo = [
      ...this.Todos,
      { id: Math.random(), content: e.target.value },
    ];
    this.setState(newTodo);
  };

  render() {
    return (
      <div>
        <h2 className="teal-text center">Add some task todo</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
