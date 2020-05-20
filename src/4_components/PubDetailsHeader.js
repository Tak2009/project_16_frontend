import React from "react";

 const PubDetailsHeader = (props) => {
    console.log(props)
    const checkData = props.pubs.length === 0;
    console.log(checkData)
    return (checkData ? <h3>No Site Available</h3> : <h3>Click a pub from the list for more details</h3>)
}

export { PubDetailsHeader }