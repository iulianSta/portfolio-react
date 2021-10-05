// Import area
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Footer function
const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="icons">
        <span>
          <a
            href="https://www.linkedin.com/in/iulian-stan-46596b1bb/"
            target="blank"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </span>
        <span>
          <a href="https://github.com/iulianSta" target="blank">
            {" "}
            <FaGithub /> GitHub
          </a>
        </span>
      </div>
      <h5>
        <span>Made by Iulian Stan </span>
        <br />
        <span>
          All copyrights reserved <span>{year}</span>
        </span>
      </h5>
    </div>
  );
};

// Footer export
export default Footer;
