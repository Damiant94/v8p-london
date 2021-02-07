import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';

const home = () => {

    return (
        <section className={classes.Home}>
            <div className={classes.Container}>
                <div className={classes.Headers}>
                    <h1>Welcome to V8P London</h1>
                    <h2>We'll make your car awesome!</h2>
                    <div className={classes.SeeMoreWrapper}>
                        <Link to="/About-us">
                            <div className={classes.SeeMoreBtn}>
                                About Us
                            </div>
                        </Link>
                    </div>
                    <div className={classes.LogoWrapper}>
                        <div className={classes.Logo}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default home;