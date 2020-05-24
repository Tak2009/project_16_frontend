import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';


class PubList extends React.Component {

    renderPubs= () => {
        return this.props.pubs.map(pub => (
        <li className="indend" key={pub.id}><Link key={pub.id} to={`/pubs/${pub.id}`}>Pub Name: {pub.name} | Postcode: {pub.postcode}</Link>
            <div className="image-trim">
                {/* <img src={require(`../img/${pub.image_pic}`)} alt={pub.id}/> */}
                <img src={pub.image_pic} alt={pub.id}/>
            </div>
            <p></p>
        </li>
        ));
    };
        
    render(){
        console.log(this.props)
        return (
            <div className="list">
              <h2 className="indend">1. Pub List</h2>
                {this.renderPubs()}
            </div>
        )
    }
}



// const PubList = (props) => {
//     console.log(props)
//     console.log(props.match.url)

//     const renderPubs= (props) => {
//         return props.pubs.map(pub => (
//         <li key={pub.id}><Link key={pub.id} to={`/pubs/${pub.id}`}>{pub.name} | {pub.address}</Link>
//         <p>{pub.email}</p>
//         </li>
//         ));
//     };

//     const renderDetails = (props) => {
//         return (<Route path={`${props.match.url}:pubId`} render={routerProps => <PubDetails {...routerProps} pubs={props.pub} />}/>)
//     }

//     return (
//         <div>
//         {renderPubs(props)}
//         {renderDetails(props)}
//         </div>
//     )
// }

export default PubList