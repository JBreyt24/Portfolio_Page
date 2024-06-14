// src/components/BackgroundSlider.js
import React from 'react';
import BackgroundSlider from 'react-background-slider';

const images = [
    '/images/bg1.jpg',
    '/images/bg2.jpg',
    '/images/bg3.jpg',
];

const BackgroundComponent = () => (
    <BackgroundSlider
        images={images}
        duration={5}
        transition={2}
    />
);

export default BackgroundComponent;
