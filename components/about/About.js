import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3>Who We Are</h3>
              <h2>
                At Munim Consulting Group, we prioritize financial excellence
                and client success. With expertise in tax advisory, auditing,
                and strategic planning, our seasoned professionals offer
                tailored solutions to meet unique needs. Through transparent
                communication and innovative strategies, we guide clients
                towards prosperity.
              </h2>
              <p>
                In today's challenging financial landscape, Munim Consulting
                Group is a beacon of integrity and reliability. We prioritize
                long-lasting relationships founded on trust, transparency, and
                mutual respect. Our mission extends beyond providing exceptional
                financial services; we empower clients with knowledge and
                insights for informed decision-making. Whether you're a startup
                seeking guidance or an established enterprise navigating growth,
                Munim Consulting Group is your steadfast ally on the path to
                sustainable success and prosperity.
              </p>
              <div className="text-center text-lg-start">
                <a
                  href="#"
                  className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <Image
              src="/img/about.jpg"
              className="img-fluid"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
