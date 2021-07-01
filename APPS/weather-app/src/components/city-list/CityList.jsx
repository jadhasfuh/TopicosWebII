import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../city-info/CityInfo';
import Weather from '../weather/Weather';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import axios from 'axios'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Alert from '@material-ui/lab/Alert';

const renderAndCityCountry = eventOnClickCity => (value, cityandcountry, weather) => {

    const { city, country } = cityandcountry;
    var temperature = 0;
    if (weather) {
        if (value === 'Kelvin') {
            temperature = weather.temperature;
        } else if (value === 'Farenheit') {
            temperature = ((weather.temperature - 273.15) * 1.8) + 32;
        } else {
            temperature = ((weather.temperature - 273.15));
        }
    }


    return (
        <ListItem key={city} onClick={eventOnClickCity} button>
            <Grid container justify="center" alignItems="center">
                <Grid item md={8} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={4} sm="12">
                    {
                        weather ? (
                            <Weather temperature={parseFloat(temperature).toFixed(2)} state={weather.state} />
                        ) : (":( No hay data disponible")
                    }
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {

    const [error, setError] = useState(null);
    const [allWeather, setAllWeather] = useState({});

    useEffect(() => {
        const setWather = async (city, country, countryCode) => {
            const appid = "90b56df6574757975727b9dd5dd79ea5"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`

            try {
                const response = await axios.get(url);
                const temperature = data.main.temp
                const state = data.weather[0].main.toLowerCase()
                const propName = [`${city}-${country}`]
                const propValue = { temperature, state }

                setAllWeather(allWeather => ({
                    ...allWeather,
                    [propName]: propValue
                }));

            } catch (e) {
                if (error.response) {
                    const { data, status } = error.response;
                    setError("Error en el servidor");
                } else if (error.request) {
                    setError("Verifique su conexion a internet");
                } else {
                    setError("Error al cargar los datos");
                }
            }

            /*axios.get(url)
                .then(response => {
                    const {data} = response
                    const temperature = data.main.temp
                    const state = data.weather[0].main.toLowerCase()
                    const propName = [`${city}-${country}`]
                    const propValue = {temperature,state}

                    setAllWeather(allWeather=>({...allWeather,[propName]:propValue}))
                })
                .catch(error => {
                    if(error.response) {
                        const {data,status} = error.response;
                        console.log("data",data);
                        console.log("status",status);
                        setError("Error en el servidor");
                    }else if (error.request) {
                        console.log("Servidor inaccesible")
                        setError("Verifique su conexion a internet");
                    }else{
                        console.log("Error de servidor");
                        setError("Error al cargar los datos");
                    }
                })*/
        }

        cities.forEach(({ city, country, countryCode }) => {
            setWather(city, country, countryCode)
        })
    }, [cities]);

    const [value, setValue] = React.useState('Farenheit');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Grid container direction="column">
            <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="grados" value={value} onChange={handleChange} row>
                    <FormLabel component="legend"><h4>Ver en:&nbsp;&nbsp;</h4></FormLabel>
                    <FormControlLabel value="Farenheit" control={<Radio />} label="Farenheit" />
                    <FormControlLabel value="Kelvin" control={<Radio />} label="Kelvin" />
                    <FormControlLabel value="Celcius" control={<Radio />} label="Celcius" />
                </RadioGroup>
            </FormControl>
            {
                error &&
                <Alert severity="Error" >
                    {error}
                </Alert>
            }
            <List>
                {
                    cities.map(cityandcountry => renderAndCityCountry(onClickCity)(value, cityandcountry,
                        allWeather[`${cityandcountry.city}-${cityandcountry.country}`]
                    ))
                }
            </List>
        </Grid>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList