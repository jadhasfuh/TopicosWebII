import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import {IconContext} from 'react-icons';
import {WiDaySunny} from 'react-icons/wi';
import {Link as LinkRouter} from 'react-router-dom';
import Typograpy from '@material-ui/core/Typography'

const AppFrame = ({children}) => {
    return (
        <Grid container justify = "center">
            <AppBar position = "static">
                <Toolbar variant = "dense">
                    <IconButton 
                        color = "inherit" 
                        aria-label = "menu">
                            <Link
                                to = "/"
                                color = "inherit"
                                aria-label = "menu"    
                                component = {LinkRouter}
                            >
                                <IconContext.Provider value = {{size:'2em'}}>
                                    <WiDaySunny/>
                                </IconContext.Provider>
                            </Link>
                    </IconButton>
                    <Typograpy color = "inherit" variant = "h6">
                        ClimApp
                    </Typograpy>
                </Toolbar>
            </AppBar>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node,
}

export default AppFrame
