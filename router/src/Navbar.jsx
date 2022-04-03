import React, { Component } from 'react'
import { Routes, Route, Link,NavLink } from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
          <nav>

                  <NavLink to="/">HOME</NavLink>
                  <NavLink to="/soda">SODA</NavLink>
                  <NavLink to="/chips">CHIPS</NavLink>
                  <NavLink to="/sardines">SARDINES</NavLink>
          </nav>

      </div>
    )
  }
}
