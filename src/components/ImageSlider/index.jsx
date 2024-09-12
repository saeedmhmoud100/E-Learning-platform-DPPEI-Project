import React, { useState } from 'react';
import './style.css';

function ImageSlider({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (img) => {
        setSelectedImage(img);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            {/* Image Slider */}
            <div className="slider-container">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index}`}
                        className="slider-image"
                        onClick={() => handleImageClick(img)}
                    />
                ))}
            </div>

            {/* Modal to show enlarged image */}
            {selectedImage && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-btn" onClick={handleCloseModal}>
                            &times;
                        </button>
                        <img src={selectedImage} alt="Enlarged" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageSlider;
