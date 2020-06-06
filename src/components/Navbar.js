import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="teal nav nav-wrapper">
        <ul className="right">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
