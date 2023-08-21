import React, { useState } from "react";

function Services({ name, description, image }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div className="card d-flex justify-content-center align-items-center shadow p-3 bg-light rounded ">
      <img
        src={image}
        className="card-img-center image-fluid mt-2 rounded"
        alt={name}
        style={{
          height: "200px",
          width: "250px",
          borderRadius: "50%",
          alignSelf: "center",
        }}
      />
      <div className="card-body">
        <h6 className="text-start">{name}</h6>
        <p className="card-text text-start">
          {showFullDescription ? description : description.slice(0, 100)}
        </p>
        {description.length > 100 && (
          <button
            className="btn btn-md btn-secondary"
            onClick={toggleDescription}
          >
            {showFullDescription ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Services;
