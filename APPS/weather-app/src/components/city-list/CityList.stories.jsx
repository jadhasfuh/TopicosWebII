import React from 'react'
import CityList from './CityList';
import {action} from '@storybook/addon-actions';

export default{
    title: "CityList",
    component: CityList
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
]

export const CityListExample = () => 
    <CityList cities = {cities} onClickCity={action("Click en City")}/>;