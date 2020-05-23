import React, { Component } from 'react';
import { fetchTickets, createTicket } from "../1_actions/TicketsActions";
import { connect } from "react-redux";
// import { Route } from 'react-router-dom';
import TicketList from "../4_components/TicketList"
import TicketInput from "../4_components/TicketInput"

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
        <div>
            <br/>
            <div className="center">
            <i class="fas fa-beer fa-4x"></i>
            <i class="fas fa-beer fa-3x"></i>
            <i class="fas fa-beer fa-2x"></i>
            <i class="fas fa-beer"></i>
            <i class="fas fa-beer fa-4x"></i>
            <i class="fas fa-beer fa-3x"></i>
            <i class="fas fa-beer fa-2x"></i>
            <i class="fas fa-beer"></i>
            <i class="fas fa-beer fa-4x"></i>
            <i class="fas fa-beer fa-3x"></i>
            <i class="fas fa-beer fa-2x"></i>
            <i class="fas fa-beer"></i>
            
            </div>
            <TicketInput createTicket={this.props.createTicket} pub={this.props.pub}/><br/>
            <br/>
            <div className="center">
            <i class="fas fa-beer fa-4x"></i>
            <i class="fas fa-beer fa-3x"></i>
            <i class="fas fa-beer fa-2x"></i>
            <i class="fas fa-beer"></i>
            <i class="fas fa-beer fa-4x"></i>
            <i class="fas fa-beer fa-3x"></i>
            <i class="fas fa-beer fa-2x"></i>
            <i class="fas fa-beer"></i>
            <i class="fas fa-beer fa-4x"></i>
            <i class="fas fa-beer fa-3x"></i>
            <i class="fas fa-beer fa-2x"></i>
            <i class="fas fa-beer"></i>
            </div>
            <TicketList tickets={this.props.tickets} pub={this.props.pub}/>
            {/* <Route exact path={this.props.match.url} render={routerProps => <PubDetailsHeader {...routerProps} pubs={this.props.pubs} />}/>
            <Route path={`${this.props.match.url}/:pubId`} render={routerProps => <PubDetails {...routerProps} pubs={this.props.pubs} />}/> */}
        </div>
        );
    };
};

const mapStateToProps = ({tickets}) => ({tickets})
    

export default connect(mapStateToProps, { fetchTickets, createTicket } )(TicketsContainer) // no more deleteSite