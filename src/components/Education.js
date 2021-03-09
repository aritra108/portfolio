import React from "react";

import "../css/Education.css";
import school from "../assets/school.jpg";
import college from "../assets/college.jpg";

import SchoolIcon from "@material-ui/icons/School";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GradeIcon from "@material-ui/icons/Grade";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import DateRangeIcon from "@material-ui/icons/DateRange";

import Heading from "./Heading";

const Education = () => {
  return (
    <div id="education" className="education">
      <Heading title="My Education" color="var(--green)" />

      <div className="education__box">
        <div
          className="education__boxDescription"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h2>Schooling</h2>
          <ul>
            <li>
              <SchoolIcon className="education__icon" />
              Garden High School
            </li>
            <li>
              <LocationOnIcon className="education__icon" />
              Rajdanga, Kolkata
            </li>
            <li>
              <GradeIcon className="education__icon" />
              <p>95.6% in Class X (ICSE)</p>
            </li>
            <li className="education__noIcon">
              <p>80% in Class XII (ISC)</p>
            </li>
            <li>
              <DateRangeIcon className="education__icon" />
              <p>2004 - 2018</p>
            </li>
          </ul>
        </div>
        <img
          src={school}
          alt="School"
          className="education__boxImage"
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </div>

      <div className="education__box education__graduation">
        <img
          src={college}
          alt="School"
          className="education__boxImage"
          data-aos="fade-right"
          data-aos-delay="400"
        />
        <div
          className="education__boxDescription education__graduationDescription"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2>Graduation</h2>
          <ul>
            <li>
              <SchoolIcon className="education__icon" />
              Amity University
            </li>
            <li>
              <CardMembershipIcon className="education__icon" />
              B.Tech(CSE)
            </li>
            <li>
              <LocationOnIcon className="education__icon" />
              New Town, Kolkata
            </li>
            <li>
              <GradeIcon className="education__icon" />
              <p>8.45 CGPA (upto Sem 4)</p>
            </li>
            <li>
              <DateRangeIcon className="education__icon" />
              <p>2018 - 2022</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
