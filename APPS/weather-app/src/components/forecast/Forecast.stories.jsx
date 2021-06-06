import React from 'react'
import Forecast from './Forecast';

export default{
    title:"Forecast",
    component: Forecast
}

const forecastItemList = [
    {
        weekDay: "Domingo",
        hour: 27, 
        state: "sunny", 
        temperature: 17
    },
    {
        weekDay: "Lunes",
        hour: 18, 
        state: "sunny", 
        temperature: 25
    },
    {
        weekDay: "Martes",
        hour: 11, 
        state: "cloudy", 
        temperature: 17
    },
    {
        weekDay: "Miercoles",
        hour: 12, 
        state: "cloudy", 
        temperature: 17
    },
    {
        weekDay: "Jueves",
        hour: 1, 
        state: "cloudy", 
        temperature: 15
    },
    {
        weekDay: "Viernes",
        hour: 13, 
        state: "cloudy", 
        temperature: 18
    },
    {
        weekDay: "Sabado",
        hour: 13, 
        state: "cloudy", 
        temperature: 22
    }
];

export const ForecastExample = () => <Forecast forecastItemList={forecastItemList}/>