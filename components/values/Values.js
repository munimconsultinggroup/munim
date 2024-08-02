/* eslint-disable @next/next/no-img-element */
import servicesData from "./values.json";

const Values = () => {
  return (
    <section id="values" className="values">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>
            Your Partner for Financial Success: Your Prosperity, Our
            Responsibility
          </p>
        </header>

        <div className="row">
          {servicesData.map((value, index) => (
            <div
              key={index}
              className={`col-lg-4 mt-4 ${index !== 0 ? "mt-lg-0" : ""}`}
            >
              <div className="box">
                <img
                  src={value.imgSrc}
                  style={{ width: "300px", height: "300px" }}
                  className="img-fluid"
                  alt=""
                />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
