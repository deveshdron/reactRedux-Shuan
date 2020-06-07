import React, { Component } from "react";
import AddTodo from "./AddTodo.js";
import Todo from "./Todos.js";

class App extends Component {
  state = {
    Todos: [{ id: "1", content: "Buy some cake" }],
  };
  render() {
    return (
      <div>
        <Todo todos={this.state.Todos} />
        <AddTodo />
      </div>
    );
  }
}
export default App;
