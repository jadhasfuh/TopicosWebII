import React from "react";
import logo from "../../images/UofQ/l1.png";
import "../../Styles/UofQ/NavBar.css";
import lupa from "../../images/UofQ/loupe.png";

const NavBar = () => {
  return (
    <div className="QNAv1">
      <table>
        <tr>
          <td rowSpan="2">
            <img src={logo} alt="Corrupto" />
          </td>
          <td style={{ textAlign: "right" }}>
            <ul className="Lista1">
              <li>
                <button>
                  <img src={lupa} alt="Corrupto" />
                  Search and Sign In
                </button>
              </li>
              <li className="l1">Media</li>
              <li className="l1">Faculty/Staff</li>
              <li className="l1">Alumni</li>
              <li className="l1">Athletics</li>
              <li className="l1">Library</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: "right" }}>
            <ul className="Lista2">
              <li>Admision</li>
              <li>Campus Life</li>
              <li>Campus Life</li>
              <li>International</li>
              <li>Research</li>
              <li>Academics</li>
              <li>About</li>
            </ul>
          </td>
        </tr>
      </table>
      <div className="CoronaDiv">
        <p>⚠</p> Coronavirus: <p>Find up-to-date information on COVID-19</p>
      </div>
    </div>
  );
};

export default NavBar;
