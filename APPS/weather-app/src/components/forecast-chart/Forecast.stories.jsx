import React from 'react'
import ForecastChart from './ForecastChart';

export default{
    title: "ForecastChart",
    component: ForecastChart
}

//Dia y Hora: DDD HH
//MIN: Temperatura Minima
//MAX: Temperatura Maxima
const data = [
    {
        "dayHour": "Dom 18",
        "min": 14,
        "max": 22
    },
    {
        "dayHour": "Lun 19",
        "min": 12,
        "max": 22
    },
    {
        "dayHour": "Mar 20",
        "min": 14,
        "max": 22
    },
    {
        "dayHour": "Mie 21",
        "min": 16,
        "max": 22
    },
    {
        "dayHour": "Jue 22",
        "min": 18,
        "max": 29
    },
    {
        "dayHour": "Vie 23",
        "min": 20,
        "max": 22
    },
    {
        "dayHour": "Sab 24",
        "min": 14,
        "max": 22
    }

]

export const ForecastChartExample = () => <ForecastChart data={data}/>