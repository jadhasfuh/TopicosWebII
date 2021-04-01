import React from 'react';
import Navegacion from './Navegacion';
import PageTools from './PageTools';
import logo from "../../images/logo.svg";

function NavBar() {
  return (

    <nav className="navbar">
      
      <PageTools/>
      <img src={logo} className="App-logo" alt="Corrupto"></img>
      <Navegacion/>
      
    </nav>
    
  );
}

export default NavBar;
