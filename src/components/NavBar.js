import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/NavBar.css"

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">Vending Machine</NavLink>
      <NavLink exact to="/coke">Coke</NavLink>
      <NavLink exact to="/lays">Lay's</NavLink>
      <NavLink exact to="/snickers">Snickers</NavLink>
    </nav>
  );
}

export default NavBar