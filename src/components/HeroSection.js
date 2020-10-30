import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection({ headline, img }) {
  <>
    <div>
      <div className="container">
        <div className="col">
          <div className="home_hero-text-wrapper">
            <h1>{headline}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default HeroSection;
