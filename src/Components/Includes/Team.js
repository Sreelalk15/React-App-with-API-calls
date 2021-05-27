import React from "react";

const Team = (props) => {
  return (
    <>
      <div className="col-md-3 team-left">
        <img src={props.image} alt="" />
        <h4>{props.name}</h4>
        <p>{props.details}</p>
      </div>
    </>
  );
};

export default Team;
