import React, { Component, Fragment, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.scss';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.toggleBtn = createRef();
        this.nav = createRef();
    }

    render() {
        this.toggleClickHandler = () => {
            this.toggleBtn.current.classList.toggle(classes.open);
            this.nav.current.classList.toggle(classes.open);
        };

        document.addEventListener("click", ({target}) => {
            if (target.nodeName !== "A" && target.nodeName !=="SPAN" && target !== this.toggleBtn.current) {
                if (this.toggleBtn.current.className.includes(classes.open)) {
                    this.toggleBtn.current.classList.remove(classes.open);
                    this.nav.current.classList.remove(classes.open);
                }
            }
        });

        return (
            <Fragment>
                <nav ref={this.nav} className={classes.Nav}>
                    <ul>
                        <li><NavLink exact activeClassName={classes.active} to="/">Home</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to="/About-us">About Us</NavLink></li>
                        <li>
                            <NavLink activeClassName={classes.active} to="/Our-service">Our Service</NavLink>
                            <div className={classes.OurServiceSubmenu}>
                                <ul>
                                    <li><NavLink activeClassName={classes.active} to="/Our-service/Bodywork">Bodywork</NavLink></li>
                                    <li><NavLink activeClassName={classes.active} to="/Our-service/Repairs">Repairs</NavLink></li>
                                    <li><NavLink activeClassName={classes.active} to="/Our-service/Servicing">Servicing</NavLink></li>
                                    <li><NavLink activeClassName={classes.active} to="/Our-service/Tuning">Tuning</NavLink></li>
                                </ul>
                            </div>
                        </li>
                        <li><NavLink activeClassName={classes.active} to="/Special-offers">Special Offers</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to="/Gallery">Gallery</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to="/Contact">Contact</NavLink></li>
                    </ul>
                </nav>
                <div 
                    ref={this.toggleBtn} 
                    className={classes.ToggleBtn} 
                    onClick={this.toggleClickHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Fragment>
        )
    }
}

export default Nav;