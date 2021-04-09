import React from "react";
import "../../Styles/UofA/Footer.css";
import icon from "../../images/UofA/recy.png";
import face from "../../images/UofA/fb.png";
import twit from "../../images/UofA/tw.png";

const Footer = () => {
  return (
    <div className="AFooter">
        
      <div className="ARedes">
        <ul>
          <li>Legal notices</li>
          <li>Contact</li>
          <li>Credits</li>
          <li>
            <img src={face} alt="Corrupto" />
          </li>
          <li>
            <img src={twit} alt="Corrupto" />
          </li>
        </ul>
      </div>

      <div className="AContacto">
        <table>
          <tr>
            <td>
              <img src={icon} alt="Corrupto" />
            </td>
            <td>
              IFCU / FIUC 21, Rue d’Assas, 75270 PARIS, France Tel.
              +33-1-44.39.52.26 / Fax +33-1-44.39.52.28 sgfiuc[@]bureau.fiuc.org
            </td>
          </tr>
        </table>
      </div>

    </div>
  );
};

export default Footer;
