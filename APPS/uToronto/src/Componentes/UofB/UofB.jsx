import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar';
import Noticias from './Noticias';
import Slider from './Slider';

const UofB = () => {
    return (
        <div>
            <NavBar />
            <Slider/>
            <Noticias/>
            <Footer/>
        </div>
    )
}

export default UofB