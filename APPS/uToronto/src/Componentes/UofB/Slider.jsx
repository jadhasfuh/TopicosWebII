import React from "react";
import "../../Styles/UofB/Body.css";
import cancer from "../../images/UofB/slide1.jpg";
import mosquito from "../../images/UofB/slide3.jpg";
import educacion from "../../images/UofB/slide2.jpg";

const Slider = () => {
  return (
    <div className="Slider">
      <div className="CSSgal">
        <s id="s1"></s>
        <s id="s2"></s>
        <s id="s3"></s>
        <div className="slider">
          <div style={{ backgroundImage: `url(${cancer})` }}>
            <h5>Una patología completamente prevenible</h5>
            <p>
              El Cáncer de Cuello Uterino es la segunda causa de muerte en la
              mujer en países en desarrollo. La doctora Valeria Cáceres sostiene
              que, en nuestro país, esta enfermedad “implica un grave problema
              en la salud pública que afecta a la población joven”. Puede
              prevenirse a través de la vacuna contra el virus del papiloma
              humano (VPH) o de una prueba de Papanicolau.
            </p>
          </div>
          <div style={{ backgroundImage: `url(${educacion})` }}>
            <h5>Educación y Dictadura</h5>
            <p>
              Hace 45 años, el golpe cívico militar en nuestro país dio inicio a
              una triste etapa que golpeó fuerte todo el sistema educativo
              argentino, y fundamentalmente, a la Universidad de Buenos Aires,
              donde se implementó un proyecto represivo que marcó y dejó huellas
              imborrables. A 45 años del golpe y en el año del bicentenario de
              la UBA, seguimos haciendo memoria.
            </p>
          </div>
          <div style={{ backgroundImage: `url(${mosquito})` }}>
            <h5>Mosquitos</h5>
            <p>
              Mosquitos: cuáles son y cómo se los controla En las últimas
              semanas, en la Ciudad de Buenos Aires y alrededores, se observó
              gran abundancia de mosquitos, por lo que surgieron las alarmas con
              respecto a la especie, a si contagian el dengue y cómo se pueden
              controlar, entre otras cosas. Conversamos sobre el tema con
              Nicolás Schweigmann, director del Grupo de Estudios de Mosquitos
              de la Facultad de Ciencias Exactas y Naturales de la Universidad
              de Buenos Aires.
            </p>
          </div>
        </div>

        <div className="prevNext">
          <div>
            <a href="#s3"></a>
            <a href="#s2"></a>
          </div>
          <div>
            <a href="#s1"></a>
            <a href="#s3"></a>
          </div>
          <div>
            <a href="#s2"></a>
            <a href="#s1"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
