import React from 'react'
import {useHistory} from 'react-router-dom';
import CityList from '../components/city-list/CityList';
import AppFrame from '../components/app-frame/AppFrame';
import Paper from '@material-ui/core/Paper';

const MainPage = () => {
    
    const history = useHistory();
    const onClickHandle = () => {
        history.push("/city");
    }

    const cities = [
        {
            city:"Guadalajara", 
            country:"Mexico",
            countryCode:"MX"
        },
        {
            city:"Morelia", 
            country:"Mexico",
            countryCode:"MX"
        },
        /*{
            city:"Buenos Aires", 
            country:"Argentina",
            countryCode:"AR"
        },
        {
            city:"Bogota", 
            country:"Colombia",
            countryCode:"CO"
        },*/
        {
            city:"Madrid", 
            country:"Spain",
            countryCode:"ES"
        }
    ];

    return (
        <AppFrame>
            <Paper elevation = {3}>
                <CityList cities={cities} onClickCity={onClickHandle}/>
            </Paper>
        </AppFrame>
    )

}

export default MainPage