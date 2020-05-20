import React from "react";

const renderDetails = (props) => {
    console.log(props)
      return (<div>
      <h2>Pub Details</h2>
      <h4>Pub Name: {props.pub.name}</h4>
      <h4>Situation:</h4><p>{props.pub.situation}</p>
      <h4>Message: </h4><p>{props.pub.message_to_supporters}</p> 
      </div>);
  }

  export default renderDetails
//   import先で、名前を変更できる