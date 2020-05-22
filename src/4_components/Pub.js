import React from "react";
import '../App.css';

const renderDetails = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Pub Details</h2>
            <div className="image-trim-2">
                {/* <img src={require(`../img/${props.pub.image_pic}`)} alt={props.pub.id}/> */}
                <img src={props.pub.image_pic} alt={props.pub.id}/>
            </div>
            <p></p>
            
            <h4>Pub Name: {props.pub.name}</h4>
            <h4>Situation:</h4><p>{props.pub.situation}</p>
            <h4>Message To Supporters: </h4><p>{props.pub.message_to_supporters}</p> 
        </div>
    );
  }

  export default renderDetails
//   import先で、名前を変更できる