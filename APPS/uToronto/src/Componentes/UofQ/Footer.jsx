import React from 'react'
import QLFL1 from './QLFL1';
import '../../Styles/UofQ/Footer.css';
import logo from '../../images/UofQ/l2.png';
import QLFL2 from './QLFL2';

const Footer = () => {
    return (
        <div className="QFooter">
            <QLFL1/>
            <hr/>
            <img src={logo} alt="Corrupto" id="QFlogo"/>
            <QLFL2/>
        </div>
    )
}

export default Footer
