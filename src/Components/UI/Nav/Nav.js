import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.scss';

const nav = () => {
    return (
        <nav className={classes.Nav}>
            <ul>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/About-us">About Us</NavLink></li>
                <li>
                    <NavLink to="/Our-service">Our Service</NavLink>
                    <div className={classes.OurServiceSubmenu}>
                        <ul>
                            <li><NavLink to="/Bodywork">Bodywork</NavLink></li>
                            <li><NavLink to="/Repairs">Repairs</NavLink></li>
                            <li><NavLink to="/Servicing">Servicing</NavLink></li>
                            <li><NavLink to="/Tuning">Tuning</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li><NavLink to="/Special-offers">Special Offers</NavLink></li>
                <li><NavLink to="/Gallery">Gallery</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default nav;