// Import area
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.json";

// Nav function
const Nav = () => {
  const [show, setShow] = useState(false);

  const hideNav = () => {
    setShow(!show);
  };

  const navLogo = Logo.map((obj) => {
    const { id, img } = obj;
    return <img key={id} className="logo" src={img} alt="Iulian Stan Logo" />;
  });

  // Navigation menu
  return (
    <nav>
      <div className="top-menu">
        <div className="bars" onClick={hideNav}>
          <div className="top-bar"></div>
          <div className="center-bar"></div>
          <div className="bottom-bar"></div>
        </div>
        <div>{navLogo}</div>
      </div>
      <ul className={show ? show : "hide"}>
        <Link to="/">
          <li onClick={hideNav}>Home</li>
        </Link>
        <Link to="/about">
          <li onClick={hideNav}>About me</li>
        </Link>
        <Link to="/projects">
          <li onClick={hideNav}>Projects</li>
        </Link>
        <Link to="/contact">
          <li onClick={hideNav}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

// Nav export
export default Nav;
