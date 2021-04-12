import React from "react";
import "../../Styles/UofB/NavBar.css";

const Navegacion = () => {
  return (
    <div className="BNavegacion">
      <ul className="Bnavi">
        <li>
          <a class="active" href="#home">Ingresantes</a>
        </li>
        <li>
          <a href="#news">Estudiantes</a>
        </li>
        <li>
          <a href="#contact">Graduados</a>
        </li>
        <li>
          <a href="#contact">Profesores</a>
        </li>
        <li>
          <a href="#contact">Docentes</a>
        </li>
      </ul>

      <ul className="Bnavi2">
        <li>
          <a href="#home">Institucional</a>
        </li>
        <li>
          <a href="#news">Academica</a>
        </li>
        <li>
          <a href="#contact">Investigacion</a>
        </li>
        <li>
          <a href="#contact">Extension</a>
        </li>
        <li>
          <a href="#contact">Posgrados</a>
        </li>
        <li>
          <a href="#contact">Colegios</a>
        </li>
        <li>
          <a href="#contact">Facultades</a>
        </li>
        <li>
          <a href="#contact">UBA Salud</a>
        </li>
        <li>
          <a href="#contact">Cultura</a>
        </li>
        <li>
          <a href="#contact">Comunicacion</a>
        </li>
        <li>
          <a href="#contact">Internacionales</a>
        </li>
      </ul>
    </div>
  );
};

export default Navegacion;
