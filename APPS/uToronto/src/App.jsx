import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UofT from './Componentes/UofT/UofT';
import UofB from './Componentes/UofB/UofB';
import UofQ from './Componentes/UofQ/UofQ';
import UofA from './Componentes/UofA/UofA';
import Menu from './Componentes/Menu';

function App() {

  return (
    
    <Router>
      <div>
        <Menu/>
        <Switch>
          <Route path="/toronto" component={UofT}></Route>
          <Route path="/buenos" component={UofB}></Route>
          <Route path="/queen" component={UofQ}></Route>
          <Route path="/angola" component={UofA}></Route>
        </Switch>
      </div>
    </Router>
  
  );

}

export default App;
