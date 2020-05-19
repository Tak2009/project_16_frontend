import React, { Component } from 'react';
import { fetchPubs } from "../1_actions/PubsActions";
import { connect } from "react-redux";
import { PubList } from "../4_components/PubList"


class PubsContainer extends Component {

    componentDidMount() {
        this.props.fetchPubs()
    }
    
    render(){
        console.log(this.props)
        return (
        <div>
            <PubList pubs={this.props.pubs}></PubList>
        </div>
        );
    };
};

const mapStateToProps = (state) => (state)
    

export default connect(mapStateToProps, { fetchPubs } )(PubsContainer) // no more deleteSite