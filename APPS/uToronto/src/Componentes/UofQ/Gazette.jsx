import React from "react";
import logo from "../../images/UofQ/l1.png";
import "../../Styles/UofQ/Body.css";
import QCard from "./QCard";
import QSpot from "./QSpot";
import g1 from "../../images/UofQ/g1.jpg";
import g2 from "../../images/UofQ/g2.jpg";
import g3 from "../../images/UofQ/g3.jpg";
import g4 from "../../images/UofQ/g4.jpg";
import s1 from "../../images/UofQ/sp1.jpg";
import s2 from "../../images/UofQ/sp2.png";
import cal from "../../images/UofQ/cal.png";

const Gazette = () => {
  return (
    <div className="QGazzette">
      <img src={logo} alt="Corrupto" id="QGLogo" />
      <div className="QGBar"></div>
      <div id="CardContainer">
        <QCard
          texto="Queen's announces next Dean of Smith School of Business"
          source={g1}
        />
        <QCard
          texto="Queen’s medical students helping with Kingston’s vaccination rollout"
          source={g2}
        />
        <QCard
          texto="Queen's broadens efforts to promote health and safety"
          source={g3}
        />
        <QCard
          texto="Principal Deane addresses community concerns over COVID-19 cases"
          source={g4}
        />
      </div>
      <div id="SpotContainer">
        <QSpot
          texto="Find the information needed to start your next chapter in our 2021 
          Undergraduate Viewbook-to-go."
          source={s1}
          titulo="Your greatest story starts here"
          enlace="Read the Viewbook-to-go"
          spt="SPOTLIGHT"
        />
        <QSpot
          texto="As one of the top universities in Canada, Queen’s offers academic leadership, 
          excellence in teaching, and an exceptional university experience."
          source={s2}
          titulo="Welcome to Queen's"
          enlace="Watch our video"
          spt="EXPERIENCE QUEEN'S"
        />
        <img src={cal} alt="Corrupto" id="Cal" />
      </div>
    </div>
  );
};

export default Gazette;
