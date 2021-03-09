import React from "react";
import "../css/Contact.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Heading from "./Heading";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <Heading title="Contact Me" color="var(--grey)" />
      <div className="contact__container">
        <div className="contact__row" data-aos="flip-left" data-aos-delay="200">
          <p>
            <strong>Phone</strong>
          </p>
          <p>+916289972280</p>
        </div>

        <div className="contact__row" data-aos="flip-left" data-aos-delay="200">
          <p>
            <strong>Email</strong>
          </p>
          <p>aritrapaul108@gmail.com</p>
        </div>

        <div className="contact__row" data-aos="flip-left" data-aos-delay="200">
          <p>
            <strong>Profiles</strong>
          </p>
          <div className="contact__social">
            <a href="https://www.linkedin.com/in/aritra-paul-60a9081a8/">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/aritra108">
              <GitHubIcon />
            </a>
          </div>
        </div>

        <div className="contact__row" data-aos="flip-left" data-aos-delay="200">
          <p>
            <strong>Address</strong>
          </p>
          <div className="contact__address">
            <p>29X Dharmatala Road, Kasba</p>
            <p>Kolkata - 700042</p>
            <p>West Bengal</p>
            <p>India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
