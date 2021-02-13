import React from 'react';
import classes from './Contact.module.scss';
import envelopeImg from '../../../Assets/img/envelope.png';

const contact = () => {
    return (
        <section className={classes.Contact}>
            <h2>Have some questions?</h2>
            <h3>Feel free to contact us.</h3>
            <div className={classes.main}>
                <div className={classes.contactImg}>
                    <img src={envelopeImg} alt="envelope" />
                </div>
                <div className={classes.contactLinks}>
                    <div><a href="tel:+44 7740 028048"><i className="fas fa-phone"></i>+44 7740 028048</a></div>
                    <div><a href="mailto:mail@mail.com"><i className="far fa-envelope"></i>mail:mail@mail.com</a></div>
                    <div><a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i>facebook.com</a></div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9963.844769770722!2d-0.12423789271587049!3d51.36701011343618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487607f2fd76cf17%3A0xdac01a4c915b93c7!2sV8P%20London!5e0!3m2!1spl!2spl!4v1612993788838!5m2!1spl!2spl" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </section>
    );
};

export default contact;