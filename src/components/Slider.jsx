import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  '/images/landing_1.jpg',
  '/images/landing_real2.jpg',
  '/images/landing_2.jpg',
  'images/slider4.jpg',
  'images/slider5.jpg'
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change duration to 5000 milliseconds (5 seconds)
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <div className="navigation_slider">
        <button className="next" onClick={nextSlide}></button>
      </div>
    </div>
  );
};

export default Slider;
