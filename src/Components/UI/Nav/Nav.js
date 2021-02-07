import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.scss';

const nav = () => {
    return (
        <nav className={classes.Nav}>
            <ul>
                <li><NavLink activeClassName={classes.active} to="/">Home</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/About-us">About Us</NavLink></li>
                <li>
                    <NavLink activeClassName={classes.active} to="/Our-service">Our Service</NavLink>
                    <div className={classes.OurServiceSubmenu}>
                        <ul>
                            <li><NavLink activeClassName={classes.active} to="/Bodywork">Bodywork</NavLink></li>
                            <li><NavLink activeClassName={classes.active} to="/Repairs">Repairs</NavLink></li>
                            <li><NavLink activeClassName={classes.active} to="/Servicing">Servicing</NavLink></li>
                            <li><NavLink activeClassName={classes.active} to="/Tuning">Tuning</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li><NavLink activeClassName={classes.active} to="/Special-offers">Special Offers</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/Gallery">Gallery</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/Contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default nav;