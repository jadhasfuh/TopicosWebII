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
            city:"Ciudad Juarez", 
            country:"Mexico"
        },
        {
            city:"Ciudad Sahagun", 
            country:"Mexico"
        },
        {
            city:"Guadalajara", 
            country:"Mexico"
        },
        {
            city:"Paris", 
            country:"Francia"
        },
        {
            city:"New York", 
            country:"EUA"
        },
        {
            city:"Tokio", 
            country:"Japon"
        },
        {
            city:"Dubai", 
            country:"EAU"
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