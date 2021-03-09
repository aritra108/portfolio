import React from "react";

import "../css/Projects.css";
import amazon from "../assets/amazon.PNG";
import forum from "../assets/forum.PNG";
import speed from "../assets/speed.PNG";

import Heading from "./Heading";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <Heading title="My Projects" color="var(--navy)" />

      <div className="projects__container">
        <Project
          image={amazon}
          url="https://clone-ff04b.web.app/"
          title="Amazon Clone"
          description="A clone of the Amazon e-commerce website which attempts to provide similar UI/UX features with major functionalities like User Login, Add to Cart, Card Payment and My Orders, along with mobile responsiveness."
          technologies={["ReactJS", "Firebase", "Material-UI", "Stripe"]}
          github="https://github.com/aritra108/amazon-clone"
        />
        <Project
          image={forum}
          url="https://forum-aritra108.web.app/"
          title="Discussion Forum"
          description="A forum where an user can read question-answers, and login to ask a question, answer a question and comment on existing answers."
          technologies={[
            "ReactJS",
            "Firebase",
            "Material-UI",
            "WYSIWYG Editor",
          ]}
          github="https://github.com/aritra108/discussion-forum"
        />
        <Project
          image={speed}
          url="https://speedtypinggame-aritra108.netlify.app/"
          title="Speed Typing Game"
          description="Type a random english word within the given time limit to score points and make it to the leaderboard!"
          technologies={[
            "HTML",
            "CSS",
            "Javascript",
            "Local Storage",
            "Netlify",
          ]}
          github="https://github.com/aritra108/Speed-Typing-Game"
        />
      </div>

      <p
        className="projects__moreLink"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        For more such projects, please have a visit at my{" "}
        <a href="https://github.com/aritra108?tab=repositories">
          GitHub Account
        </a>
        !
      </p>
    </div>
  );
};

export default Projects;
