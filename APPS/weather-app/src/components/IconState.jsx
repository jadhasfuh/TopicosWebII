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
    "clouds",
    "cloudy",
    "fog",
    "sunny",
    "rain",
    "mist",
];

const stateByName = {
    clouds: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiDayRain,
    mist: WiDayFog
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