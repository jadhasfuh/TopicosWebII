import React from "react";
import "../../Styles/UofT/Body.css";
import magaIcon from "../../images/UofT/magaIcon.png";

const Magazine = () => {
  return (
    <div className="Magazine">
      <div className="imgCard2">
        <span>FEATURE</span>
        <p>
            CAMPUS  
        </p>
        Out of action, Comes Hope
        <p>
            The university of Toronto is stepping up efforts against anti-Black racism and moving toward greater inclusion
        </p>
      </div>
      <div className="magaInner">
        <div className="magaDesc">
          <table>
            <tr>
              <td>
                <img src={magaIcon} alt="Corrupto" />
              </td>
              <td>
                <p>
                  In our latest issue: a historic gift from the Temerty family
                  will transform medical education and improve patient care,
                  students and faculty pull together to get through a semester
                  like no other and U of T scientists join the quest to develop
                  made-in-Canada vaccines
                </p>
                <p style={{ color: " #337ab7", fontWeight: "bold" }}>
                  Explore the issue
                </p>
              </td>
            </tr>
          </table>
        </div>
        <div className="magaImg"></div>
      </div>
    </div>
  );
};

export default Magazine;
