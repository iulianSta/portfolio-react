// Import area
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.json";

// Nav function
const Nav = () => {
  const { id, img } = Logo;
  console.log(Logo);
  // Navigation menu
  return (
    <nav>
      <img id={id} src={img} alt="Iulian Stan Logo" />
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
