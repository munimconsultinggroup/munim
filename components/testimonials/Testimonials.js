import React from "react";
import Image from "next/image";
import testimonialsData from "./testimonials.json"; // Adjust the path according to your project structure

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Testimonials</h2>
          <p>What they are saying about us</p>
        </header>
        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="swiper-wrapper">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    {Array.from({ length: testimonial.stars }, (_, index) => (
                      <i key={index} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p>{testimonial.content}</p>
                  <div className="profile mt-auto">
                    <Image
                      src={testimonial.image}
                      className="img-fluid"
                      alt={testimonial.name}
                      width={100}
                      height={100}
                    />
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
