import React, { Component } from "react";
import AddTodo from "./AddTodo.js";
import Todo from "./Todos.js";

class App extends Component {
  state = {
    Todos: [
      { id: "1", content: "Buy some cake" },
      { id: "2", content: "Buy some milk" },
    ],
  };

  addTodo = (todo) => {
    let newTodo = [...this.state.Todos, todo];
    this.setState({ Todos: newTodo });
  };

  deleteTodo = (id) => {
    let newTodo = this.state.Todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ Todos: newTodo });
  };
  render() {
    return (
      <div>
        <Todo todos={this.state.Todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
