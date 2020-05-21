import React, { Component } from 'react';
import { fetchTickets } from "../1_actions/TicketsActions";
import { connect } from "react-redux";
// import { Route } from 'react-router-dom';
// import PubList from "../4_components/PubList"
// import PubDetails from "../4_components/PubDetails"
// import {PubDetailsHeader} from "../4_components/PubDetailsHeader"
import '../App.css';



class TicketsContainer extends Component {

    componentDidMount() {
        this.props.fetchTickets()
    }
    
    render(){
        console.log(this.props)
        // console.log(this.props.match.url)
        // console.log(`${this.props.match.url}/:ticketId`)

        return (
        <div className="container">
            {/* <TicketsList pubs={this.props.tickets} /> */}
            {/* <Route exact path={this.props.match.url} render={routerProps => <PubDetailsHeader {...routerProps} pubs={this.props.pubs} />}/>
            <Route path={`${this.props.match.url}/:pubId`} render={routerProps => <PubDetails {...routerProps} pubs={this.props.pubs} />}/> */}
        </div>
        );
    };
};

const mapStateToProps = (state) => (state)
    

export default connect(mapStateToProps, { fetchTickets } )(TicketsContainer) // no more deleteSite