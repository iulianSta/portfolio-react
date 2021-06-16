// Import area
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.json";

// Nav function
const Nav = () => {
  const navMenu = Logo.map((obj) => {
    const { img } = obj;
    console.log(img);
    return <img className="logo" src={img} alt="Iulian Stan Logo" />;
  });

  // Navigation menu
  return (
    <nav>
      <div className="bars">
        <div className="top-bar"></div>
        <div className="center-bar"></div>
        <div className="bottom-bar"></div>
      </div>
      <div>{navMenu}</div>

      <Link to="/">
        <li key="0">Home</li>
      </Link>
      <Link to="/about">
        <li key="1">About me</li>
      </Link>
      <Link to="/projects">
        <li key="2">Projects</li>
      </Link>
      <Link to="/contact">
        <li key="3">Contact</li>
      </Link>
    </nav>
  );
};

// Nav export
export default Nav;
