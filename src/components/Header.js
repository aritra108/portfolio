import React, { useState } from "react";
import "../css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header" data-aos="fade-down" data-aos-delay="3000">
      <div className="header__menu" onClick={() => setOpen(true)}>
        <MenuIcon className="header__menuIcon" />
      </div>

      <div className={`header__dropdown ${open && "expand"}`}>
        <div className="header__dropdownClose">
          <ClearIcon onClick={() => setOpen(false)} />
        </div>
        <div className="header__dropdownNav" onClick={() => setOpen(false)}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="header__logo">
        <h2>Aritra Paul</h2>
      </div>

      <div className="header__nav">
        <ul>
          <li>Home</li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
