import React from "react";

import "../css/Skill.css";
import { LinearProgress } from "@material-ui/core";

const Skill = ({ image, title, percent }) => {
  return (
    <div className="skill">
      <img src={image} alt={title} />
      <LinearProgress variant="determinate" value={percent} />
      <small>{percent}%</small>
    </div>
  );
};

export default Skill;
