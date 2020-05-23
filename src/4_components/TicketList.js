import React from "react";



class TicketList extends React.Component {

    calcTotalNumberOfTickets = () => {
        const pubTickets = this.props.tickets.filter(ticket => ticket.pub_id === this.props.pub.id);
        // const reviewRatingArray = siteReviews.map(review => review.rating)
        const totalNumberOfTickets = pubTickets.length === 0 ?  null : pubTickets.length
        return totalNumberOfTickets
    };

    renderTickets = () => {
      console.log(this.props)
        const pubTickets = this.props.tickets.filter(ticket => ticket.pub_id === this.props.pub.id);

        return pubTickets.map(ticket=> (
          <li key={ticket.id}>
          <p>Message from {ticket.name}: {ticket.message}</p>
          </li>
          ));
    };

    render(){
      console.log(this.props)
      return (
         <div>
            <br/>
              <h2>Supporter List</h2>
              <h3>The total number of Tickets Bought : {this.calcTotalNumberOfTickets() ? `${this.calcTotalNumberOfTickets()} tickets!!` : "Please support this pub!"}</h3>
              <br/>
                <ol>
                {this.renderTickets()}
                </ol>
         </div>
      );
    }
};

//   render(){
//     return (
//       <div>
//         { this.props.reviews ?
//         <div>
//           <h4>Reviews: </h4>
//           <ol>
//           {this.renderReviews()}
//           </ol>
//         </div>
//         : null }
//       </div>
//      );
//   }
// };


export default TicketList


