import React, { Component } from 'react';


class SupporterRegistration extends Component {

  // state = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   postcode: "",
  //   situation: "",
  //   message_to_supporters: "",
  //   image_pic: ""
  // }

  // handleOnChange = (event) => {
  //   console.log(this.state)
  //   const {name, value} = event.target;
  //   this.setState({
  //     [name]: value
  //   })
  // }

  // handleOnSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.createPub(this.state) 
  //   this.setState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //     postcode: "",
  //     situation: "",
  //     message_to_supporters: "",
  //     image_pic: ""
  //   })
  // }

  render() {
    console.log(this.props)
    return (
      <div className="background4">
          <br/>
           <h3>Work in Progress....</h3>
           <iframe src="https://giphy.com/embed/stM3RHS60s6iI" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wine-amy-schumer-stM3RHS60s6iI">via GIPHY</a></p>
           <iframe src="https://giphy.com/embed/V6vYGxjArFFde" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-simpsons-beer-homer-simpson-V6vYGxjArFFde">via GIPHY</a></p>
           <br/>
           {/* <form onSubmit={this.handleOnSubmit} className="form_style"> 
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
                <label>Situation: <input name="situation" onChange={this.handleOnChange} type="text" className="input" value={this.state.situation}/></label>
                <br/>
                <label>Message to Supporters: <input name="message_to_supporters" onChange={this.handleOnChange} type="text" className="input" value={this.state.message_to_supporters}/></label>
                <br/>
                <label>Pub Image URL (jpg): <input name="image_pic" onChange={this.handleOnChange} type="text" className="input" value={this.state.image_pic}/></label>
                <br/>
                <input type="submit" value="Register"/>
            </form> */}
      </div>
    );
  }
};


export default SupporterRegistration;