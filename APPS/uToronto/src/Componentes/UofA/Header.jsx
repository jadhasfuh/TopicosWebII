import React from 'react'
import '../../Styles/UofA/NavBar.css';
import m1 from "../../images/UofT/acorn.png";
import m2 from "../../images/UofT/loupe.png";
import m3 from "../../images/UofT/tree.png";

const Header = () => {
    return (
        <div className="AHeader">
            <table>
                <tr>
                    <td><img src={m1} alt="Corrupto"/><br/><br/>RESEARCH</td>
                    <td><img src={m2} alt="Corrupto"/><br/><br/>FORESIGHT</td>
                    <td><img src={m3} alt="Corrupto"/><br/><br/>UNIVERSITY SOCIAL RESPONSABILITY</td>
                    <td>EXECUTE TRAINIG</td>
                </tr>
            </table>
        </div>
    )
}

export default Header