import React from "react";
import "../../Styles/Body.css";

const WelcomeImage = () => {
  return (
    <div className="img">
      <div className="imgCard">
        <span>U of T News</span>U of T to aid in historic vaccination effort,
        host Mississauga clinic
        <button>MORE</button>
      </div>
      <div className="campuStatus">
        <ul>
          <li>
            <a href="#home">Campus Status &#x26A0;</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomeImage;
