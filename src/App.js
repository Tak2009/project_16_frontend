import React from 'react';
import PubsContainer from "./3_containers/PubsContainer"
import ScrollToTop from "./4_components/ScrollToTop"
import { connect } from "react-redux";
import { createPub } from "./1_actions/PubsActions";

import NavBar from './4_components/NavBar';
import { Home } from './4_components/Home';
import { About } from './4_components/About';
import PubRegistration from './4_components/PubRegistration';

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
        <NavBar />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/pubs" render={routerProps => <PubsContainer {...routerProps}/>}/>
        <Route exact path="/pub/registration" render={routerProps => <PubRegistration {...routerProps} createPub={props.createPub}/>}/>
      　</div>
    　</ScrollToTop>
    </Router>
  );
}

const mapStateToProps = (state) => (state)
    

export default connect(mapStateToProps, { createPub } )(App)
