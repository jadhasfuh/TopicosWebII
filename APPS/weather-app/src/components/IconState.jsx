import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons';

import {
    WiCloud,
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiDayRain
} from 'react-icons/wi';

export const validValues = [
    "cloud",
    "cloudy",
    "fog",
    "sunny",
    "rain",
];

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiDayRain
};


const renderState = state => {
    const IconState = stateByName[state];
    return <IconState />
};

const IconState = ({ state }) => {
    return (
        <IconContext.Provider value={{ size: '6em' }}>
            {renderState(state)}
        </IconContext.Provider>

    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
