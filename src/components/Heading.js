import React from "react";
import "../css/Heading.css";

const Heading = ({ title, color }) => {
  return (
    <div className="heading" style={{ color: color }} data-aos="flip-down">
      <h1>{title}</h1>
      <div className="heading__divider">
        <div className="heading__line" style={{ backgroundColor: color }}></div>
        <p>&#9672;</p>
        <div className="heading__line" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default Heading;
