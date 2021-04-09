import React from 'react'
import "../../Styles/UofT/Body.css";

const Noticia = (props) => {
    return (
        <div>
            <p className = "Fecha">{props.fecha}</p>
            <p className = "Encabezado">{props.encabezado}</p>
        </div>
    )
}

export default Noticia
