import React from "react";
import u from '../../images/UofQ/tw.png';

const QLFL2 = () => {
  return (
    <div className="QLFL2">
      <table>
          <tr>
              <td>
                  <ul>
                      <li>Queens University</li>
                      <li>Kingston, Ontario, Canada</li>
                      <li>Queens University is situated on <a href="#n">traditional Anishinaabe and Haudenosaunee Territory</a> </li>
                  </ul>
              </td>
              <td>
                  <ul style={{listStyle:'square'}}>
                      <li>Contacts</li>
                      <li>Emergency Contacts</li>
                      <li>Main Line: 613.533.2000</li>
                  </ul>
              </td>
              <td>
                  <img src={u} alt="Corrupto"/>Member of the U15 Group of Canadian Research Universities
              </td>
          </tr>
      </table>
    </div>
  );
};

export default QLFL2;
