import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import IconState, {validValues} from '../IconState';
import Grid from '@material-ui/core/Grid';

const Weather = ({ temperature, state }) => {
    return (
        <Grid container item direction = "row" justify="center" alignItems="center" spacing={1}>
            <IconState state={state}/>
            <Typography display="inline" variant="h4">{temperature}</Typography>
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}

export default Weather