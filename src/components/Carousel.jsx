import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='div-carousel'>
            <img className='imgCarousel'
                src={images[currentImageIndex]}
                alt="Imagen del carrusel"
            />
            <button className='btnCarousel' onClick={goToPreviousImage}>Left</button>
            <button className='btnCarousel-1' onClick={goToNextImage}>Right</button>
        </div>
    );
};

export default Carousel;
