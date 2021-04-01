import React from "react";
import "../../Styles/Body.css";
import features from "../../images/features.jpg";
import arrow from "../../images/arrow.png";

const Feature = () => {
  return (
    <div className="FeatureS">
      <div className="InterFS">
        <ul className="FeaTitle">
          <li>
            <h1>U of T Celebrates</h1>
          </li>
          <li>
            <button>EXPLORE U OF T CELEBRATES</button>
          </li>
        </ul>
        <p>
          The University of Toronto is home to some of the world’s top faculty,
          students, alumni and staff. U of T Celebrates recognizes their
          award-winning accomplishments.
        </p>
        <img src={features} alt="Corrupto"></img>
        <div className="sideImg">
          <h4>RESEARCH & INNOVATION</h4>
          <p>Arthur Ripstein and Douglas Stephan awarded Killam Prizes</p>
          <img src={arrow} alt="Corrupto"></img>
        </div>
      </div>
    </div>
  );
};

export default Feature;
