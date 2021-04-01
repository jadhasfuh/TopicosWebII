import React from 'react';
import "../../Styles/NavBar.css";
import acorn from "../../images/acorn.png";
import mail from "../../images/mail.png";
import tree from "../../images/tree.png";
import loupe from "../../images/loupe.png";

const PageTools = () => {
    return (
        <ul className="linksHead">
        <li>
          <a href="#home">
            <img src={mail} alt="Corrupto" />
          </a>
        </li>
        <li>
          <a href="#home">WEBMAIL</a>
        </li>
        <li>
          <a href="#home">
            <img src={tree} alt="Corrupto" />
          </a>
        </li>
        <li>
          <a href="#home">QUERCUS</a>
        </li>
        <li>
          <a href="#home">
            <img src={acorn} alt="Corrupto" />
          </a>
        </li>
        <li>
          <a href="#home">ACORN</a>
        </li>
        <li>
          <a href="#home" >
            <button className="botno1"><img src={loupe} alt="Corrupto"/> &nbsp;SEARCH</button>
          </a>
        </li>
        <li>
          <a href="#home" >
            <button className="botno2">&#x003BD; &nbsp; JUMP TO</button>
          </a>
        </li>
      </ul>
    )
}

export default PageTools
