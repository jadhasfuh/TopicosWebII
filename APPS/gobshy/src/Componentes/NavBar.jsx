import React from "react";
import logo from "../Images/logo.png";
import lupa from '../Images/loupe.png';
import 'bulma/css/bulma.min.css';

const navBar = () => {
  return (
    <div id="NavBar">
      <nav
        className="navbar has-text-weight-bold"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src={logo} style={{width:'120px'}} alt="Corrupto" />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="#"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="#">
                Gobierno
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#">
                  Lorem
                </a>
                <a className="navbar-item" href="#">
                  Lorem
                </a>
                <a className="navbar-item" href="#">
                  Lorem
                </a>
              </div>

              <a className="navbar-link" href="#">
                Noticias
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#">
                  Lorem
                </a>
                <a className="navbar-item" href="#">
                  Lorem
                </a>
                <a className="navbar-item" href="#">
                  Lorem
                </a>
              </div>

              <a className="navbar-link" href="#">
                Sahuayo
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#">
                  Lorem
                </a>
                <a className="navbar-item" href="#">
                  Lorem
                </a>
                <a className="navbar-item" href="#">
                  Lorem
                </a>
              </div>

              <a className="navbar-link" href="#">
                Tramites y Servicios
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#">
                  Lorem
                </a>
                <a className="navbar-item" href="#">
                  Lorem
                </a>
                <a className="navbar-item" href="#">
                  Lorem
                </a>
              </div>

              <a className="navbar-link" href="#">
                Transparencia
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#">
                  Lorem
                </a>
                <a className="navbar-item" href="#">
                  Lorem
                </a>
                <a className="navbar-item" href="#">
                  Lorem
                </a>
              </div>
            </div>

            <a className="navbar-item">Archivo Municipal</a>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-link" href="#">
                  <img src={lupa} style={{width:'20px'}} alt="Corrupto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navBar;
