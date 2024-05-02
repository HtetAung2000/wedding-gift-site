import React, { useState } from 'react';
import './PhotoGallery.css';

const PhotoGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="photo-gallery">
      <div className="image-row">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-item"
            onClick={() => openModal(image)}
          >
            <img src={image} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            {/* <span className="close" onClick={closeModal}>
              &times;
            </span> */}
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;