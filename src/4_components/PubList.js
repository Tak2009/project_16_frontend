import React from "react";
import { Link } from 'react-router-dom';

const PubList = (props) => {
    console.log(props)
    const renderPubs= (pubs) => {
        
        return pubs.map(pub => (
        <li key={pub.id}><Link key={pub.id} to={`/pubs/${pub.id}`}>{pub.name} | {pub.address}</Link>
            
            <p>{pub.email}</p>
        </li>
        ));
    };

    return (
        renderPubs(props.pubs)
        )
}

export { PubList }