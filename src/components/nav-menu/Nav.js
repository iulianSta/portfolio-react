// Import area
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.json";

// Nav function
const Nav = () => {
  const navMenu = Logo.map((obj) => {
    const { id, img } = obj;
    console.log(img);
    return (
      <div>
        <img key={id} src={img} alt="Iulian Stan Logo" />
      </div>
    );
  });

  // Navigation menu
  return (
    <nav>
      <div>{navMenu}</div>

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
