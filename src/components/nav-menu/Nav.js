// Import area
import React from "react";
import { Link } from "react-router-dom";

// Nav function
const Nav = () => {
  // Navigation menu
  return (
    <nav>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About me</li>
      </Link>
      <Link to="/projects">
        <li>Projects</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </nav>
  );
};

// Nav export
export default Nav;
