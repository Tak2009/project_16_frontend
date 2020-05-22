import React, { Component } from 'react';
import { fetchPubs } from "../1_actions/PubsActions";
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
import PubList from "../4_components/PubList"
import PubDetails from "../4_components/PubDetails"
import { PubDetailsHeader } from "../4_components/PubDetailsHeader"
// import PubRegistration from "../4_components/PubRegistration"
import '../App.css';



class PubsContainer extends Component {

    componentDidMount() {
        this.props.fetchPubs()
    }
    
    render(){
        console.log(this.props)
        console.log(this.props.match.url)
        console.log(`${this.props.match.url}/:pubId`)

        return (
        <div className="container">
            <PubList pubs={this.props.pubs} />
            {/* <Route exact path="/pub/registration" render={routerProps => <PubRegistration {...routerProps}/>}/> */}
            <Route exact path={this.props.match.url} render={routerProps => <PubDetailsHeader {...routerProps} pubs={this.props.pubs} />}/>
            <Route path={`${this.props.match.url}/:pubId`} render={routerProps => <PubDetails {...routerProps} pubs={this.props.pubs} />}/>
        </div>
        );
    };
};

const mapStateToProps = (state) => (state)
    

export default connect(mapStateToProps, { fetchPubs } )(PubsContainer) // no more deleteSite