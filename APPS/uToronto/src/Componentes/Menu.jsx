import React from "react";
import { Link } from "react-router-dom";
import '../Styles/UofB/NavBar.css';

const Menu = () => {
  return (
    <div className="Bnavi2">
      <ul>
        <li>
          <Link to="/toronto">Universidad de Toronto</Link>
        </li>
        <li>
          <Link to="/buenos">Universidad de Buenos Aires</Link>
        </li>
        <li>
          <Link to="/queen">Universidad de Queen's</Link>
        </li>
        <li>
          <Link to="/angola">Universidad Catolica de Angola</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
