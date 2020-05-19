import React from 'react';
import './App.css';
import PubsContainer from "./3_containers/PubsContainer"

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
    <Route exact path="/pubs" render={routerProps => <PubsContainer {...routerProps}/>}/>
    </div>
    </Router>
  );
}

export default App;
