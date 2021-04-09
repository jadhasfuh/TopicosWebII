import React from 'react'
import '../../Styles/UofQ/Body.css'

const QCard = (props) => {
    return (
        <div className="QCard">
            <img src={props.source} alt="Corrupto"/>
            <p>{props.texto}</p>
        </div>
    )
}

export default QCard
