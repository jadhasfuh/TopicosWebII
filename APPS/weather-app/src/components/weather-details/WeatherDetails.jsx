import React from 'react'
import PropTypes from 'prop-types'

const WeatherDetails = ({humidity,kaze}) => {
    return (
        <ul>
            <li>Humedad {humidity}</li>
            <li>Vientos {kaze}</li>
        </ul>
    )
}

WeatherDetails.propTypes = {
    humidity:  PropTypes.array.isRequired,
    kaze: PropTypes.array.isRequired
}

export default WeatherDetails
