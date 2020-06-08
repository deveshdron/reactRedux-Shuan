import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    setTimeout(() => {
      this.props.history.push("/about");
    }, 2000);

    return (
      <nav className="teal darken-3 nav-wrapper">
        <div className="container">
          <a className="brand-logo left">Poke'Times</a>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// using higher order component of BrowserRouter
export default withRouter(Navbar);
