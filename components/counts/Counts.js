import React from "react";

const Counts = () => {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="45"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  45
                </span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i
                className="bi bi-journal-richtext"
                style={{ color: "#ee6c20" }}
              ></i>
              <div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="231"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  231
                </span>
                <p>Projects</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-headset" style={{ color: "#15be56" }}></i>
              <div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="6700"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  6700
                </span>
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-people" style={{ color: "#bb0852" }}></i>
              <div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="10"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  10
                </span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
