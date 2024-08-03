/* eslint-disable @next/next/no-img-element */
import React from "react";
import clientsData from "./clients.json"; // Adjust path as per your file structure

const Clients = () => {
  // Function to chunk array into groups of size 'size'
  const chunkArray = (array, size) => {
    return array.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(array.slice(i, i + size));
      }
      return acc;
    }, []);
  };

  // Chunk clientsData into groups of 3 images per carousel item
  const chunkedClients = chunkArray(clientsData, 6);

  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Our Satisfied Clients</p>
        </header>

        <div
          id="carouselAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {chunkedClients.map((chunk, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <div className="row">
                  {chunk.map((client, idx) => (
                    <div key={idx} className="col">
                      <img
                        src={client.imageSrc}
                        style={{ width: 90, height: 70 }}
                        className="img-fluid"
                        alt={client.altText}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
