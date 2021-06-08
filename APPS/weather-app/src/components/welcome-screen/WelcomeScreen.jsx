import React,{useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three';

const WelcomeScreen = ({children}) => {

    const myRefDiv = useRef(null);
    const [vanta,setVanta] = useState(0);
    
    alert("Primera renderizacion",myRefDiv.current);

    useEffect(() => {
        alert("Segunda renderizacion",myRefDiv.current);
        if( vanta == 0 ) {
            setVanta(
                CLOUDS({
                    THREE, 
                    el: myRefDiv.current
                })
            )
            alert("vanta es diferente de 0");
        }
        return () => {
            if (vanta) vanta.destroy()
        }
    },[vanta]);

    return (
        <div className="full" ref = {myRefDiv}>
            {children}
        </div>
    )

}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen