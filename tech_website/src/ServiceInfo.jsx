import React, { useState, useEffect } from 'react';
import Services from './Services';

function ServiceInfo() {
  const [techweb, setTechweb] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        let url = "http://localhost:3000/techweb";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setTechweb(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {techweb.map((element) => (
          <div className="col" key={element.id}>
            <Services
              name={element.name}
              description={element.description}
              image={element.image}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ServiceInfo;
