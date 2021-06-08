import React from 'react'
import WelcomeScreen from '../components/welcome-screen/WelcomeScreen';
import Grid from '@material-ui/core/Grid';
import {IconContext} from 'react-icons';
import {FaCloudSun} from  "react-icons/fa";
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const WelcomePage = () => {
    return (
        <WelcomeScreen> 
            <Grid
                container
                direction = "column"
                justify = "center"
                className = "full"
            >
                <div className = "highLight">
                    <Grid
                        item 
                        container
                        xs = {12}
                        justify = "center"
                        alignItems = "center"
                    >
                        <Grid item>
                            <IconContext.Provider value = {{size: '8em'}}>
                                <FaCloudSun/>
                            </IconContext.Provider>
                        </Grid>
                        <Grid 
                            item
                            container
                            direction = "column"
                            justify = "center"
                            alignItems = "center"
                        >
                            <Typography
                                varian = "h3"
                                color = "inherit"
                            >
                                ClimApp
                            </Typography>
                            <Link
                                component = {RouterLink}
                                to = "/main"
                                color = "inherit"
                                aria-label = "menu"
                            >
                                Acceder
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
}

export default WelcomePage
