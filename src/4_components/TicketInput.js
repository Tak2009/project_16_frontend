import React, { Component } from "react";

class TicketInput extends Component {

    state = {
      message: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      postcode: "",
      pub_id: this.props.pub.id
    }
    
    handleOnChange = (event) => {
        console.log(this.state)
        const {name, value} = event.target;
        console.log({name, value})
        this.setState({
            [name]: value,
            pub_id: this.props.pub.id
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.createTicket(this.state)
        this.setState({
            message: "",
            name: "",
            email: "",
            phone: "",
            address: "",
            postcode: "",
        })
      }

    render () { 
        console.log(this.props)
      return( 
            <div>
          <br/>
           <h2>Ticket Purchase Form</h2>
            <form onSubmit={this.handleOnSubmit}> 
                <label>Message to the Pub: <br/><textarea name="message" onChange={this.handleOnChange} type="text" className="textarea" value={this.state.comment}/></label>
                <br/>
                <label>Your name: <input name="name" onChange={this.handleOnChange} type="text" className="input" value={this.state.name}/></label>
                <br/>
                <label>Email: <input name="email" onChange={this.handleOnChange} type="text" className="input" value={this.state.email}/></label>
                <br/>
                <label>Phone: <input name="phone" onChange={this.handleOnChange} type="text" className="input" value={this.state.phone}/></label>
                <br/>
                <label>Address: <br/><textarea name="address" onChange={this.handleOnChange} type="text" className="input" value={this.state.address}/></label>
                <br/>
                <label>Postcode: <input name="postcode" onChange={this.handleOnChange} type="text" className="input" value={this.state.postcode}/></label>
                <br/>
                <br/>
                <input type="submit" value="Buy a Ticket!"/>
            </form>
      </div>
 
        )
    }
}

export default TicketInput