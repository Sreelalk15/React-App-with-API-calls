import React from "react";

const ServerList = (props) => {
  return (
    <>
      <div className="col-md-3 digital-left">
        <div className="digital-one">
          <h4>{props.name}</h4>
          <label>from</label>
          <p>
            <sup>$</sup>
            {props.amount}
            <sup>{props.month}</sup>
            <sub>/month</sub>
          </p>
          <ul>
            <li>
              <p>{props.spec1}</p>
            </li>
            <li>
              <p>{props.spec2}</p>
            </li>
            <li>
              <p>{props.spec3}</p>
            </li>
            <li>
              <p>{props.spec4}</p>
            </li>
          </ul>
          <div className="order-btn">
            <a href="#">Order now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerList;
