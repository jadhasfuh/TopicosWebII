import React from 'react'
import Grid from '@material-ui/core/Grid';
import CityInfo from '../components/city-info/CityInfo';
import Weather from '../components/weather/Weather';
import WeatherDetails from '../components/weather-details/WeatherDetails';
import ForecastChart from '../components/forecast-chart/ForecastChart';
import Forecast from '../components/forecast/Forecast';

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

];

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

const city = 'Morelia';
const country = 'Mexico';
const temperature = 32;
const state = 'sunny';
const wind = 16;
const humidity = 70;

const CityPage = () => {
    return (
        <div>
            <Grid container justify='space-around' spacing={2} direction='column'>
                <Grid container item xs = {12} justify='center' alignItems='flex-end'>
                    <CityInfo country={country} city={city}/>
                </Grid>
                <Grid container item  xs = {12} justify='center'>
                    <Weather state={state} temperature={temperature}/>
                    <WeatherDetails wind={wind} humidity={humidity} />
                </Grid>
                <Grid item>
                    <ForecastChart data={data}/>
                </Grid>
                <Grid item>
                    <Forecast forecastItemList={forecastItemList}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default CityPage
