import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "devesh", age: "25", belt: "black", id: "1" },
      { name: "mukesh", age: "28", belt: "white", id: "2" },
      { name: "ashok", age: "22", belt: "blue", id: "3" },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({ ninjas: ninjas });
  };

  render() {
    return (
      <div className="App">
        <h1>My first react App</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <div>
          <AddNinja addNinja={this.addNinja} />
        </div>
      </div>
    );
  }
}

export default App;
