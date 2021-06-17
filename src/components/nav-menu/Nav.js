// Import area
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.json";

// Nav function
const Nav = () => {
  const [hide, setHide] = useState(true);
  const hideMenu = (hide) => {
    return hide ? hide : setHide(false);
  };
  const navMenu = Logo.map((obj) => {
    const { id, img } = obj;
    return <img key={id} className="logo" src={img} alt="Iulian Stan Logo" />;
  });

  // Navigation menu
  return (
    <nav>
      <div className="bars" onClick={hideMenu}>
        <div className="top-bar"></div>
        <div className="center-bar"></div>
        <div className="bottom-bar"></div>
      </div>

      <div>{navMenu}</div>
      <ul hide={hide} className="nav-ul">
        <Link to="/home">
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
      </ul>
    </nav>
  );
};

// Nav export
export default Nav;
