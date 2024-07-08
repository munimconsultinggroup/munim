import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Contact Us</p>
        </header>

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>
                    Koteshwor
                    <br />
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>
                    <a href="tel:+9779860701995">+977 9860701995</a>
                    <br />
                    <a href="tel:+9779849938446">+977 9849938446</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>
                    <a href="mailto:munimconsultinggroup@gmail.com">
                      munimconsultinggroup@gmail.com
                    </a>
                    <br />
                    <a href="mailto:contact@munimconsultinggroup.com.np">
                      contact@munimconsultinggroup.com.np
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>
                    Sundary - Friday
                    <br />
                    10:00AM - 07:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>

                  <button className="btn btn-primary disabled">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
