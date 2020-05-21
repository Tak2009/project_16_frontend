import React from 'react';
import PubsContainer from "./3_containers/PubsContainer"
import ScrollToTop from "./4_components/ScrollToTop"

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const App = (props) => {
  console.log(props)
  return (
    <Router>
      <ScrollToTop>
        <div>
        <Route path="/pubs" render={routerProps => <PubsContainer {...routerProps}/>}/>
      　</div>
    　</ScrollToTop>
    </Router>
  );
}

export default App;
