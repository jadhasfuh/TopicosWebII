import React from 'react'
import WeatherDetails from './WeatherDetails';

export default{
    title: "WeatherDetails",
    component: WeatherDetails
}

export const CityListExample = () => <WeatherDetails humidity="80" kaze="10km/h"/>;