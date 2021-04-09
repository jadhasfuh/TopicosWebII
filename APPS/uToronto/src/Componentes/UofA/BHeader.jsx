import React from "react";
import "../../Styles/UofA/Body.css";
import tree from "../../images/UofA/logo.png";

const BHeader = () => {
  return (
    <div className="BHeader">
      <table>
        <tr>
          <td>Angola</td>
          <td>
            <img src={tree} alt="Corrupto" />
          </td>
          <td>www.ucan.edu/www14/index.php</td>
        </tr>
      </table>
    </div>
  );
};

export default BHeader;
