// Import area
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.json";

// Nav function
const Nav = () => {
  const [show, setShow] = useState(false);
  const [bars, setBars] = useState(true);

  const hideNav = () => {
    setShow(!show);
    setBars(!bars);
  };

  const navLogo = Logo.map((obj) => {
    const { id, img } = obj;
    // return <img key={id} className="logo" src={img} alt="Iulian Stan Logo" />;
    return (
      <video width="150" height="150" controls>
        <source key={id} src={img} type="video/mp4" />
      </video>
    );
  });

  // Navigation menu
  return (
    <div>
      <div className="top-menu">
        <div className={bars ? "bars" : "bars xmenu"} onClick={hideNav}>
          <div className="top-bar"></div>
          <div className="center-bar"></div>
          <div className="bottom-bar"></div>
        </div>
        <div>{navLogo}</div>
      </div>
      <ul className={show ? "show" : "hide"}>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <li onClick={hideNav}>Home</li>
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/about`}>
          <li onClick={hideNav}>About me</li>
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/projects`}>
          <li onClick={hideNav}>Projects</li>
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/contact`}>
          <li onClick={hideNav}>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

// Nav export
export default Nav;
