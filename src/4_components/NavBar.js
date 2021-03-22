import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


const link = {
  width: '100px',
  padding: '1px',
  margin: '0 6px 6px',
  // background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="header">
        <li><NavLink 
            style={link} 
            exact to="/"
            // activeStyle={{
            //   background: "darkblue"
            // }}
            >Home</NavLink>
        </li>
        <li><NavLink 
            style={link} 
            to="/about"
            // activeStyle={{
            //   background: "darkblue"
            // }}
            >About This Website</NavLink>
        </li>
        <li><NavLink 
            style={link} 
            to="/pubs"
            // activeStyle={{
            //   background: "darkblue"
            // }}
            >Local Pub List</NavLink>
        </li>
        <li><NavLink 
            style={link} 
            to="/pub/registration"
            // activeStyle={{
            //   background: "darkblue"
            // }}
            >For Pub Owner (Registration)</NavLink>
        </li>
        <li><NavLink 
            style={link} 
            to="/supporter/registration"
            // activeStyle={{
            //   background: "darkblue"
            // }}
            >For Supporter (Registration)</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
