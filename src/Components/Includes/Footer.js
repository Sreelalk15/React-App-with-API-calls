import React from "react";
import Anchor from "../../Components/Includes/Link";

const Footer = () => {
  return (
    <>
      <div className="b-navgation">
        <div className="container">
          <div className="b-nav-main">
            <ul>
              <li>
                <Anchor href="home">Home</Anchor>
              </li>
              <li>
                <Anchor href="about">About</Anchor>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-text">
            <p>
              Template By <a href="http://w3layouts.com/"> W3layouts</a>
            </p>
          </div>
        </div>
        <a
          href="#home"
          id="toTop"
          className="scroll"
          style={{ display: "block", opacity: 1 }}
        >
          {" "}
          <span id="toTopHover"> </span>
        </a>
      </div>
    </>
  );
};

export default Footer;
