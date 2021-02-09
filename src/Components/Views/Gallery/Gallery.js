import React from 'react';
import classes from './Gallery.module.scss';
import Carousel from 'react-images';

const images = [
    { source: 'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg' }, 
    { source: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy' },
    { source: 'https://i.wpimg.pl/886x498/pg-uploads.wpcdn.pl/2017/09/project-cars-2-t%C5%82o.jpg' }
];

const gallery = () => {
    return (
        <section className={classes.Gallery}>
            <Carousel views={images}/>
        </section>
    );
};

export default gallery;