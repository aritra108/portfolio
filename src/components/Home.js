import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home__overlay"></div>
      <div className="home__description">
        <h2 data-aos="fade-right" data-aos-delay="400">
          Hello, I am
        </h2>
        <h1 data-aos="fade-right" data-aos-delay="800">
          Aritra Paul
        </h1>
        <h3 data-aos="fade-right" data-aos-delay="1200">
          <i>a React Developer,</i>{" "}
        </h3>
        <h3 data-aos="fade-right" data-aos-delay="1600">
          <i>a CSE Undergraduate</i>
        </h3>
        <a href="#about" data-aos="fade-right" data-aos-delay="2000">
          Explore More
        </a>
      </div>
    </div>
  );
};

export default Home;
