import React from "react";

import './nav.css';

import { useState, useEffect } from "react";
import logo from './../../images/mainlogo.png';
import {Link} from 'react-router-dom';
/**navigation bar */
const Navbar = () =>{

    return (
        
        <div className= "nav">
            <div className="aligned-section">
                <img src ={logo} className="logo-image"/>
                <nav className="nav-button-container">
                    <ul>
                        <li><Link to="/" classname="custom-link">Home</Link></li>
                        <li><Link to="/" classname="custom-link">A</Link></li>
                        <li><Link to="/" classname="custom-link">B</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;