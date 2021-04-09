import React from "react";
import lupa from "../../images/UofA/loupe.png";
import logo from "../../images/UofA/logo.jpg";
import "../../Styles/UofA/NavBar.css";

const NavBar = () => {
  return (
    <div className="ANavBar">
      <ul>
        <li>
          <a href="#a" className="ALogo">
            <img src={logo} alt="Corrupto"/>
          </a>
        </li>
        <li>
          <a href="#a"  style={{width:"1px"}} className="ANavFS"></a>
        </li>
        <li>
          <a href="#a" style={{width:"140px"}} className="ANavF">Who we are</a>
        </li>
        <li>
          <a href="#a" style={{width:"140px"}} className="ANavF">Members</a>
        </li>
        <li>
          <a href="#a" style={{width:"240px"}} className="ANavF">Collaborative Platform and Media</a>
        </li>
        <li>
          <a href="#a" style={{width:"130px"}} className="ANavF" href="#contact"></a>
        </li>
        <li>
          <a href="#a" style={{backgroundColor:"#ebeced"}}><img  style={{width:"30px"}} src={lupa} alt="Corrupto" /></a>
        </li>
        <li>
          <a href="#a" style={{backgroundColor:"#c7b298"}}>EN</a>
        </li>
        <li>
          <a href="#a" style={{backgroundColor:"#ebeced"}}>ES</a>
        </li>
        <li>
          <a href="#a" style={{backgroundColor:"#f5f6f6"}}>FR</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
