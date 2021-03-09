import React, { useEffect } from "react";

import "../css/About.css";
import { Avatar } from "@material-ui/core";

import dp from "../assets/dp.jpg";
import Heading from "./Heading";

const About = () => {
  return (
    <div id="about" className="about">
      <Heading title="About Me" color="var(--navy)" />
      <Avatar
        src={dp}
        alt="Aritra Paul"
        className="about__avatar"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <div
        className="about__description"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <p>
          My name is Aritra Paul. I live in Kolkata, India. I am currently
          pursuing a B.Tech in Computer Science and Engineering from Amity
          University, Kolkata. I have completed my schooling from Garden High
          School, Kolkata. I love to code and my main area of interest is Web
          Development, especially Frontend Web Development, using ReactJS.
        </p>
      </div>
    </div>
  );
};

export default About;
