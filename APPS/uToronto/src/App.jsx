import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UofT from './Componentes/UofT/UofT';
import Menu from './Componentes/Menu';

function App() {

  return (
    
    <Router>
      <div>
        <Menu/>
        <Switch>
          <Route path="/toronto" component={UofT}></Route>
        </Switch>
      </div>
    </Router>
  
  );

}

export default App;
