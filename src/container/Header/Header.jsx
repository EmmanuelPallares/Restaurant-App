import React from "react";
import { SubHeading } from "../../components";
import welcomecarta from "../../assets/welcomecarta.jpg";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="lorem ipsum" />
      <h1 className="app__header-h1">Lorem Ipsum</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" className="custom__button">
        Explore our menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={welcomecarta} alt="header_img" />
    </div>
  </div>
);

export default Header;
