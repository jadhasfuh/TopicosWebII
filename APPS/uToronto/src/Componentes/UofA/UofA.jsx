import React from "react";
import Pres from "./Pres";
import BHeader from "./BHeader";
import Header from "./Header";
import NavBar from "./NavBar";
import Title from "./Title";
import Footer from "./Footer";

const UofA = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <NavBar/>
      <Header/>
      <Title/>
      <BHeader/>
      <Pres/>
      <Footer/>
    </div>
  );
};

export default UofA;
