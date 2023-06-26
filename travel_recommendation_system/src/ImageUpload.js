import React, { useState } from "react";

const ImageUpload = () => {
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", imageFile); // Add the image file to the form data

    // Add other form fields to the form data if needed
    formData.append("name", "John Doe");
    formData.append("email", "johndoe@example.com");

    // Send the form data to the server using fetch or other HTTP library
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the server response
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={handleImageChange} />
      </div>
      {/* Add other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageUpload;
