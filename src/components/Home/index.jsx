import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";

import "./style.css";
function Home() {
  return (
    <div className="main__container">
      <h1 className="main__title">
        Recipe Details & <br />
        Payment Gateway <IoMdRestaurant className="icon" />
      </h1>
      <h3 className="sub-main__title">
        Select your favourite recipe and pay for it.
      </h3>
      <Link to="/browse" className="main__button">
        Get Started
        <FaArrowRight className="icon" />
      </Link>
    </div>
  );
}

export default Home;
