import React from 'react';
import PubsContainer from "./3_containers/PubsContainer"
// import PubDetails from "./4_components/PubDetails"

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const App = (props) => {
  console.log(props)
  return (
    <Router>
    <div>
    <Route path="/pubs" render={routerProps => <PubsContainer {...routerProps}/>}/>
   
    </div>
    </Router>
  );
}

export default App;
