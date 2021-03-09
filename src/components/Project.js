import React from "react";
import "../css/Project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

const Project = ({ image, url, title, description, technologies, github }) => {
  return (
    <div className="project" data-aos="fade-right" data-aos-delay="400">
      <a href={url}>
        <img src={image} alt="" />
      </a>
      <div className="project__description">
        <div className="project__title">
          <h2>{title}</h2>
          <div className="project__descriptionIcons">
            <a className="project__descriptionIcon" href={github}>
              <GitHubIcon />
            </a>
            <a className="project__descriptionIcon" href={url}>
              <LanguageIcon />
            </a>
          </div>
        </div>

        <p>{description}</p>

        <div className="project__technologiesContainer">
          <h4>Technologies:</h4>
          <div className="project__technologies">
            {technologies.map((technology) => (
              <div className="technology">{technology}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
