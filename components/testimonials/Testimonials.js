/* eslint-disable @next/next/no-img-element */
import React from "react";
import testimonialsData from "./testimonials.json"; // Adjust the path according to your project structure

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>What they are saying about us</p>
        </header>

        <div
          id="testimonialsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <div className="testimonial-item text-center">
                  <div className="stars">
                    {Array.from({ length: testimonial.stars }, (_, index) => (
                      <i key={index} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p>{testimonial.content}</p>
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.title}</h4>
                  {/* <div className="profile mt-auto">
                    <img
                      src={testimonial.image}
                      className="img-fluid rounded-circle"
                      alt={testimonial.name}
                      style={{ width: 100, height: 100 }}
                    />
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialsCarousel"
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
            data-bs-target="#testimonialsCarousel"
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

export default Testimonials;
