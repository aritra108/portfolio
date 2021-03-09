import React from "react";
import "../css/Certification.css";

const Certification = ({ image, title, url }) => {
  return (
    <div className="certification" data-aos="fade-right" data-aos-delay="400">
      <img src={image} alt={title} />
      <a href={url}>{title}</a>
    </div>
  );
};

export default Certification;
