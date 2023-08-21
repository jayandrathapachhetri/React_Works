// import React from 'react';
// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
// import { Button } from './style.jsx/Button';

// const Services = ({ name, image, description }) => {
//   return (
//     <Wrapper className="section">
//       <h2 className="common-heading">Our Services</h2>
//       <div className="container grid grid-three-column">
//         <div className="card">
//           <figure>
//             <img src={image} alt={name} />
//           </figure>
//           <div className="card-data">
//             <h3>{name}</h3>
//             <p>{description}</p>
//             <NavLink to="/service">
//               <Button className="btn">Read More</Button>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };


// const Wrapper = styled.section`
//   padding: 9rem 0;
//   background-color: ${({ theme }) => theme.colors.bg};

//   .container {
//     max-width: 120rem;
//   }

//   .card {
//     border: 0.1rem solid rgb(170 170 170 / 40%);
//     .card-data {
//       padding: 0 2rem;
//     }

//     h3 {
//       margin: 2rem 0;
//       font-weight: 300;
//       font-size: 2.4rem;
//     }
//     .btn {
//       margin: 2rem auto;
//       background-color: rgb(0 0 0 / 0%);
//       border: 0.1rem solid rgb(98 84 243);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: rgb(98 84 243);
//       font-size: 1.4rem;

//       &:hover {
//         background-color: rgb(98 84 243);
//         color: #fff;
//       }
//     }
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.2s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.2s linear;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.tab}) {
//     .grid-three-column {
//       grid-template-columns: 1fr 1fr;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-two-column,
//     .grid-three-column {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

// export default Services;


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
        className="card-img-center image-fluid mt-2 rounded-circle"
        alt={name}
        style={{
          height: "150px",
          width: "150px",
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
            className="btn btn-sm btn-secondary btn-lg"
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
