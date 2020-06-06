import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="teal darken-3 nav-wrapper">
        <div className="container">
          <ul className="right">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
