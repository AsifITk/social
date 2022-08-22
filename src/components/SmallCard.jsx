import React from "react";

function SmallCards({ data }) {
  return (
    <div className="Small-Card">
      <div className="name">
        <span className="small-type">{data[0]}</span>

        <span className="small-logo">
          <img src={data[3]} alt="" />
        </span>
      </div>
      <div className="count">
        <span className="small-count">{data[1]}</span>
        <span className="small-percent">{data[2]}</span>
      </div>
    </div>
  );
}

export default SmallCards;
