import React from "react";
import line from "../../assets/line.png";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={line} alt="title" />
  </div>
);

export default SubHeading;
