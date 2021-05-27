import React from "react";
import { Link } from "react-router-dom";

const Anchor = (props) => {
  return (
    <>
      <Link to={props.href}>{props.children}</Link>
    </>
  );
};
export default Anchor;
