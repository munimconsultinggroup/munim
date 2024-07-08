import React from "react";
import servicesData from "./services.json";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Tailored Solutions for Your Financial Success</p>
        </header>

        <div className="row gy-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200 * (index + 1)}
            >
              <div className={`service-box ${getServiceColor(service.id)}`}>
                <i className={service.iconClass + " icon"}></i>
                <h3>{service.title}</h3>
                {service.description.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
                <a href={service.readMoreLink} className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Function to determine the color of the service box based on service ID
const getServiceColor = (serviceId) => {
  switch (serviceId) {
    case "accounting":
      return "blue";
    case "tax":
      return "orange";
    case "loan":
      return "green";
    case "company-related":
      return "red";
    case "financial-management":
      return "purple";
    case "training":
      return "pink";
    default:
      return "";
  }
};

export default Services;
