import React from "react";
import "./Style.css";
import Button from "./Button";

const secciones = [
  "Destacado",
  "Eventos",
  "Gobierno de tu colonia",
  "Prensa",
  "Sahuayo",
];

const renderButtons = (onClickSeccion) => {
  const renderButton = (seccion) => (
    <li>
      <a>
        <Button
          text={seccion.toString()}
          clickHandler={onClickSeccion}
          key={seccion}
        />
      </a>
    </li>
  );
  return secciones.map(renderButton);
};

const Menu = ({ onClickSeccion }) => {
  return (
    <div className="Menu">
      <aside className="menu">
        <p className="menu-label">CATEGORÍAS</p>
        <ul class="menu-list">{renderButtons(onClickSeccion)}</ul>
      </aside>
    </div>
  );
};

export default Menu;
