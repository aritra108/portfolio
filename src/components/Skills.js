import React from "react";

import "../css/Skills.css";
import html from "../assets/html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import firebase from "../assets/firebase.webp";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import java from "../assets/java.jpg";
import python from "../assets/python.png";
import c from "../assets/c.webp";
import hackerrank from "../assets/hackerrank.png";
import coursera from "../assets/coursera.png";

import Heading from "./Heading";
import Skill from "./Skill";
import Certification from "./Certification";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <Heading title="My Skills" color="var(--grey)" />

      <div
        className="skills__container"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Skill image={html} title="HTML" percent={65} />
        <Skill image={js} title="JavaScript" percent={70} />
        <Skill image={react} title="React" percent={70} />
        <Skill image={firebase} title="Firebase" percent={40} />
        <Skill image={mysql} title="MySQL" percent={30} />
        <Skill image={java} title="Java" percent={50} />
        <Skill image={python} title="Python" percent={45} />
        <Skill image={c} title="C" percent={40} />
        <Skill image={git} title="Git" percent={35} />
      </div>

      <h2 data-aos="flip-left" data-aos-delay="400">
        Certifications
      </h2>
      <div className="skills__certifications">
        <Certification
          image={hackerrank}
          title="Problem Solving (Basic)"
          url="https://www.hackerrank.com/certificates/4d5b46c06a71"
        />
        <Certification
          image={coursera}
          title="Frontend Web Development with React"
          url="https://www.coursera.org/account/accomplishments/verify/67J6XMNY4MEY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        />
      </div>
    </div>
  );
};

export default Skills;
