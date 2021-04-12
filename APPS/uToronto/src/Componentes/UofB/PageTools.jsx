import React from 'react';
import "../../Styles/UofB/NavBar.css";
import redes1 from '../../images/UofB/n1.gif';
import redes2 from '../../images/UofB/n2.gif';
import redes3 from '../../images/UofB/n3.gif';
import redes4 from '../../images/UofB/n4.png';
import redes5 from '../../images/UofB/n5.gif';
import redes6 from '../../images/UofB/n6.gif';
import redes7 from '../../images/UofB/n7.gif';
import logo from '../../images/UofB/logo.gif';
import flag1 from '../../images/UofB/f1.jpg';
import flag2 from '../../images/UofB/f2.jpg';
import flag3 from '../../images/UofB/f3.jpg';
import lupa from '../../images/UofB/loupe.png';

const PageTools = () => {
    return (
      <div className = "BPageTools">
          <table>
            <tr>
              <td>
                <img src={logo} alt=""COorrupto/>
              </td>
              <td>
                <ul>
                  <li><img src={redes1} alt="Corrupto"/></li>
                  <li><img src={redes2} alt="Corrupto"/></li>
                  <li><img src={redes3} alt="Corrupto"/></li>
                  <li><img src={redes4} alt="Corrupto"/></li>
                  <li><img src={redes5} alt="Corrupto"/></li>
                  <li><img src={redes6} alt="Corrupto"/></li>
                  <li><img src={redes7} alt="Corrupto"/></li>
                </ul>
              </td>
              <td style={{textAlign:'right'}}>
                <ul>
                  <li><img src={flag1} alt="Corrupto"/></li>
                  <li><img src={flag2} alt="Corrupto"/></li>
                  <li><img src={flag3} alt="Corrupto"/></li>
                </ul>
                <input type="text" placeholder="buscador"/><img src={lupa} alt="Corrupto" style={{marginTop:'20px', height:'60px'}}/>
              </td>
            </tr>
          </table>
      </div>
    )
}

export default PageTools
