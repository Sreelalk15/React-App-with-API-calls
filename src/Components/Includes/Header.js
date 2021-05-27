import React from "react";
import Anchor from "../../Components/Includes/Link";

const Header = () => {
  return (
    <>
      <div classNameName="header" id="home">
        <div className="container">
          <div className="head">
            <div className="logo">
              <h1>
                <Anchor href="home">We Host</Anchor>
              </h1>
            </div>
            <div className="navigation">
              <span className="menu"></span>
              <ul className="navig">
                <li>
                  <Anchor href="home">Home</Anchor>
                </li>
                <li>
                  <Anchor href="about">About</Anchor>
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
