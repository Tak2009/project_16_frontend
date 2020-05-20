import React from "react";
import Pub from "./Pub"


class PubDetails extends React.Component {

    selectPub = () => {
        console.log(this.props)
        return (this.props.pubs.filter(pub => pub.id === Number(this.props.match.params.pubId))[0])
    }

    messageSwitch = () => {
        return (this.props.pubs.length === 0 ? <h3>No Pub Available</h3> : <h3>Click a pub from the list for more details</h3>)
      }

    render() {
      console.log(this.props)
      return (
          <div>
              { this.selectPub() ?
                <div className="details">
                    <Pub pub={this.selectPub()}/>
                </div>
            : this.messageSwitch() }
          </div>
        );
    }
}

export default PubDetails

