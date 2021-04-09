import React from 'react';
import "../../Styles/UofT/NavBar.css";

const Navegacion = () => {
    return (
        <ul className="navi">
        <li>
          <a class="active" href="#home">
            FUTURE STUDENTS
          </a>
        </li>
        <li>
          <a href="#news">CURRENT STUDENTS</a>
        </li>
        <li>
          <a href="#contact">ALUMNI</a>
        </li>
        <li>
          <a href="#contact">FACULTI & STAFF</a>
        </li>
        <li>
          <a href="#contact">DONORS</a>
        </li>
        <li>
          <a href="#about">VISITORS</a>
        </li>
      </ul>
    )
}

export default Navegacion
