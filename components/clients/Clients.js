import React from "react";
import Image from "next/image";
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
  const chunkedClients = chunkArray(clientsData, 3);

  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Our Clients</h2>
          <p>Our Satisfied Clients</p>
        </header>

        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {chunkedClients.map((chunk, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row">
                  {chunk.map((client, idx) => (
                    <div key={idx} className="col-md-4">
                      <Image
                        src={client.imageSrc}
                        width={100}
                        height={100}
                        className="d-block img-fluid"
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
            data-bs-target="#carouselExampleAutoplaying"
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
            data-bs-target="#carouselExampleAutoplaying"
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
