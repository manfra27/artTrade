import React from 'react';
import './App.css';

import img1 from './pictures/1.jpeg';
import img2 from './pictures/2.jpeg';
import img3 from './pictures/3.jpeg';
import img4 from './pictures/4.jpeg';
import img5 from './pictures/5.jpeg';
import img6 from './pictures/6.jpeg';
import img7 from './pictures/7.jpeg';
import img8 from './pictures/8.jpeg';
import img9 from './pictures/9.jpeg';
import img10 from './pictures/10.jpeg';
import img11 from './pictures/11.jpeg';
import img12 from './pictures/12.jpeg';
import img13 from './pictures/13.jpeg';

function Gallery() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];
    return (
        <>
            <div className="gallery">
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + 1}`} className="gallery-image" />
                ))}
            </div>
        </>
    );
}

export default Gallery;