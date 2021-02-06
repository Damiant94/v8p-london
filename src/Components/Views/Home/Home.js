import React from 'react';
import classes from './Home.module.scss';

const home = () => {
    return (
        <section className={classes.Home}>
            <div className={classes.Container}>
                <div className={classes.Headers}>
                    <h1>Welcome to V8P London</h1>
                    <h2>We'll make your car awesome!</h2>
                    <div className={classes.SeeMoreWrapper}>
                        <div className={classes.SeeMoreBtn}>About Us</div>
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