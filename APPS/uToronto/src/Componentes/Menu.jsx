import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/toronto">Universidad de Toronto</Link>
        </li>
        <li>
          <Link to="/buenos">Universidad de Buenos Aires</Link>
        </li>
        <li>
          <Link to="/florida">Universidad de Florida</Link>
        </li>
        <li>
          <Link to="/angola">Universidad Catolica de Angola</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
