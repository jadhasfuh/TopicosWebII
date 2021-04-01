import React from "react";
import "../../Styles/Footer.css";
import footerLogo from "../../images/footerLogo.svg";
import acorn from "../../images/acorn.png";
import mail from "../../images/mail.png";
import tree from "../../images/tree.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fup">
        <table>
          <tr>
            <td>
              <ul>
                <li>Future Students</li>
                <li>Current Students</li>
                <li>Alumni</li>
                <li>Faculty & Staff</li>
                <li>Donors</li>
                <li>Visitors</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>News & Media</li>
                <li>About U of T</li>
                <li>Give to U of T</li>
                <li>Academics</li>
                <li>Programs of Study</li>
                <li>Research & Innovation</li>
                <li>University Life</li>
                <li>Libraries</li>
                <li>A-Z Directory</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <img src={footerLogo} alt="Corrupto" className="Flogo" />
                </li>
              </ul>
            </td>
            <td style={{ textAlign: "right" }}>
              <ul>
                <li>Contacts</li>
                <li>Careers</li>
                <li>Accessibility</li>
                <li>Privacy</li>
                <li>Site Feedback</li>
                <li>Site Map</li>
              </ul>
            </td>
            <td style={{ textAlign: "right" }}>
              <ul>
                <li>FSt. George Campus</li>
                <li>Mississauga Campus</li>
                <li>Scarborough Campus</li>
                <li>Campus Maps</li>
                <li>Campus Safety</li>
                <li>Campus Status: &#x26A0;</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <div className="fdown">
        <p>
          <img src={acorn} />
          &nbsp;&nbsp;<img src={tree} />
          &nbsp;&nbsp;<img src={mail} />
          &nbsp;&nbsp;&nbsp;SOCIAL MEDIA DIRECTORY
        </p>
        <p>UNIVERSITY OF TORONTO - SINCE 1827</p>
      </div>
    </div>
  );
};

export default Footer;
