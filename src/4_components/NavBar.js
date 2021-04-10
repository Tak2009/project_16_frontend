import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


// const link = {
//   width: '100px',
//   padding: '1px',
//   margin: '0 6px 6px',
//   // background: 'blue',
//   textDecoration: 'none',
//   color: 'white'
// }

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="header">
        <li className="link"><NavLink 
            // style={link} 
            exact to="/"
            >Home</NavLink>
        </li>
        <li className="link"><NavLink 
            // style={link} 
            to="/about"
            >About This Website</NavLink>
        </li>
        <li className="link"><NavLink 
            // style={link} 
            to="/pubs"
            >Local Pub List</NavLink>
        </li>
        <li className="link"><NavLink 
            // style={link} 
            to="/pub/registration"
            >For Pub Owner (Registration)</NavLink>
        </li>
        <li className="link"><NavLink 
            // style={link} 
            to="/supporter/registration"
            >For Supporter (Registration)</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
