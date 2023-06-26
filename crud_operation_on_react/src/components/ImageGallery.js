import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [imageData, setImageData] = useState('');
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    // Load saved images from local storage on initial render
    const savedImagesFromStorage = localStorage.getItem('savedImages');
    if (savedImagesFromStorage) {
      setSavedImages(JSON.parse(savedImagesFromStorage));
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveImage = () => {
    if (imageData) {
      // Save image data to local storage
      const updatedImages = [...savedImages, imageData];
      localStorage.setItem('savedImages', JSON.stringify(updatedImages));
      setSavedImages(updatedImages);
      setImageData('');
    }
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={handleSaveImage}>Save Image</button>

      <h2>Saved Images</h2>
      <ul>
        {savedImages.map((image, index) => (
          <li key={index}>
            <img src={image} alt={`Saved Image ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;