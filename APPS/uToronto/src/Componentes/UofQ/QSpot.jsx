import React from 'react'
import '../../Styles/UofQ/Body.css'

const QSpot = (props) => {
    return (
        <div className="QSpot">
            <h4>{props.spt}</h4>
            <img src={props.source} alt="Corrupto"/>
            <h3>{props.titulo}</h3>
            {props.texto}
            <p>{props.enlace}</p>
        </div>
    )
}

export default QSpot
