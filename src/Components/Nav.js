import React from "react";
import App from "../App";

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>
        <a href="#header">
          JK's Port<span>f</span>olio
        </a>
      </h1>
      <ul>
        <li>
          <a href="#section1">Projects</a>
        </li>
        <li>
          <a href="#section2">Technologies</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
