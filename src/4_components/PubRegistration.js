import React, { Component } from 'react';
// import {Prompt} from 'react-router-dom'


class PubRegistration extends Component {

  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    situation: "",
    message_to_supporters: "",
    image_pic: "",
    submit: false
  }

  handleOnChange = (event) => {
    console.log(this.state)
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.createPub(this.state)
    this.setState({
      submit: true
    })
    this.setState({
      name: "",
      email: "",
      phone: "",
      address: "",
      postcode: "",
      situation: "",
      message_to_supporters: "",
      image_pic: "",
      submit: false

    })
    this.props.history.replace("/pubs")
  }

　　

  render() {
    console.log(this.props)
    return (
      <div>
          <br/>
           <h3>Pub Registration Form</h3>
           <p>You will be redirected once you have completed your registration.</p>
            <form onSubmit={this.handleOnSubmit} className="form_style"> 
                <label>Pub Name: <input name="name" onChange={this.handleOnChange} type="text" className="input" value={this.state.name}/></label>
                <br/>
                <label>Email: <input name="email" onChange={this.handleOnChange} type="text" className="input" value={this.state.email}/></label>
                <br/>
                <label>Phone: <input name="phone" onChange={this.handleOnChange} type="text" className="input" value={this.state.phone}/></label>
                <br/>
                <label>Address: <input name="address" onChange={this.handleOnChange} type="text" className="input" value={this.state.address}/></label>
                <br/>
                <label>Postcode: <input name="postcode" onChange={this.handleOnChange} type="text" className="input" value={this.state.postcode}/></label>
                <br/>
                <label>Situation: <textarea name="situation" onChange={this.handleOnChange} type="text" className="input" value={this.state.situation}/></label>
                <br/>
                <label>Message to Supporters: <textarea name="message_to_supporters" onChange={this.handleOnChange} type="text" className="input" value={this.state.message_to_supporters}/></label>
                <br/>
                <label>Pub Image URL (jpg): <input name="image_pic" onChange={this.handleOnChange} type="text" className="input" value={this.state.image_pic}/></label>
                <br/>
                <br/>
                <input type="submit" value="Register"/>
            </form>
      </div>
    );
  }
};


export default PubRegistration;