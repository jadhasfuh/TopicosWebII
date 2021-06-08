import React from 'react'
import WelcomeScreen from '../components/welcome-screen/WelcomeScreen';
import Grid from '@material-ui/core/Grid';
import {IconContext} from 'react-icons';
import {FaRegFrownOpen} from  "react-icons/fa";
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const NotFound = () => {
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
                            <FaRegFrownOpen/>
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
                            404 | Pagina no encontrada
                        </Typography>
                        <Link
                            component = {RouterLink}
                            to = "/main"
                            color = "inherit"
                            aria-label = "menu"
                        >
                            Ir a Inicio
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    </WelcomeScreen>
    )
}

export default NotFound
