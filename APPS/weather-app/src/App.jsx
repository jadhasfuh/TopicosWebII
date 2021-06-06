import React from 'react'
import {BrowserRouter as Router,
        Switch,
        Route
       } from 'react-router-dom';
import WelcompePage from './page/WelcomePage';
import MainPage from './page/MainPage';
import NotFound from './page/NotFound';
import CityPage from './page/CityPage';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <Grid container alignItems='center' justify='center' direction='row'>
      <Grid item xs={12} sm={11} md={10} lg={8}>
        <Router>
          <Switch>
            <Route exact path="/">
              <WelcompePage/>
            </Route>
            <Route path="/main">
              <MainPage/>
            </Route>
            <Route path="/city">
              <CityPage/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </Grid>
    </Grid>
  )
}

export default App
