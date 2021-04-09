import React from "react";
import Vid from "../../images/UofQ/lolo.mp4";
import '../../Styles/UofQ/Body.css';

const Video = () => {
  return (
    <div className="QVideo">

      <video autoplay>
        <source src={Vid} type="video/mp4" />
      </video>

      <div id="QTag">
        <p>Connect with academic and wellness resources</p> to finish the semester with confidence.
      </div>

    </div>
  );
};

export default Video;
