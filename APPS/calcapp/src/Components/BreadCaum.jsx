//Importacion de las librerias

import React from "react";
import '../App.css';

//Despliegue de la informacion

const BreadCaum = () => {
  return (
    <table border="1px solid black"  width="70%" >
      <tr>
        <th>Dirección:</th>
        <td>
          Carretera Nacional S/N, KM 202, Centro, 59510 Jiquilpan de Juárez,
          Mich.
        </td>
      </tr>
      <tr>
        <th>Teléfono:</th>
        <td>353 533 1126</td>
      </tr>
      <tr>
        <td>Director:</td>
        <td>J. Jesús Zalapa Alemán</td>
      </tr>
      <tr>
        <td>Fundación:</td>
        <td>27 de noviembre de 1976</td>
      </tr>
      <tr>
        <td>Porcentaje de admisión:</td>
        <td>84.6% (2014)</td>
      </tr>
      <tr>
        <td>Productos y servicios:</td>
        <td>jiquilpan.tecnm.mx</td>
      </tr>
    </table>
  );
};

//Exportacion de la informacion

export default BreadCaum;
