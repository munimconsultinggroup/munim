import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              Discover modern accounting solutions tailored to grow your
              business
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              <span className="fw-bold">Munim Consulting Group: </span>Expert
              financial and business solutions for your success.
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a
                  href="/services"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Get Started</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <Image
              src="/img/logo_munim.svg"
              width={500}
              height={500}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
