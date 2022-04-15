import React, { Component } from "react";
import "../index.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

export default Navbar;
