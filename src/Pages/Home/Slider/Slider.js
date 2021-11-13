import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);}
    return (
        
        
        
        
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/DYnk03b/banner-1.jpg"
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/jzLdKZv/banner-2.jpg"
                    alt="Second slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Prc2jFY/banner-3.jpg"
                    alt="Third slide"
                    />

                    
                </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Slider;