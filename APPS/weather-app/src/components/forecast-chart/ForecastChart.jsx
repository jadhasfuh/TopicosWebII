import React from 'react'
import PropTypes from 'prop-types'
import { LineChart,
         Line,
         CartesianGrid,
         XAxis,
         YAxis,
         Legend,
         Tooltip,
         ResponsiveContainer
        } from 'recharts';

const ForecastChart = ({data}) => {
    return (
        <ResponsiveContainer height = {250} width={"90%"}>
            <LineChart
                margin = {{top:20, bottom:20, left:50, right:50}}
                data = {data}
            >
                <XAxis dataKey="dayHour"/>
                <YAxis/>
                <Legend/>
                <Tooltip/>
                <CartesianGrid stroke="#222222"/>
                <Line type="monotone" dataKey="max" stroke="#ff0408" />
                <Line type="monotone" dataKey="min" stroke="#0804ff" />
            </LineChart>     
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        })
    )
}

export default ForecastChart
