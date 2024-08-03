import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h4>Our Newsletter</h4>
              <h6>Stay In Touch With Us</h6>
            </div>
            <div className="col-lg-6">
              <form action="" method="post">
                <input type="email" name="email" />
                <button className="btn btn-primary disabled">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <h2 style={{ display: "inline" }} className="fw-bold">
                Munim <br /> Consulting Group
              </h2>
              <h6 style={{ display: "inline" }} className="fw-bold mx-2">
                Pvt. Ltd.
              </h6>
              <h6>
                Munim Consulting Group offers comprehensive accounting solutions
                led by a team of skilled professionals, including Chartered
                Accountants. Our tailored financial services optimize business
                performance and ensure compliance with regulatory standards,
                covering bookkeeping to tax planning. With our reliable and
                efficient support, clients can focus on driving growth and
                success.
              </h6>
              <div className="social-links mt-3">
                <a
                  href="https://facebook.com/munimconsultinggroup"
                  className="facebook"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://instagram.com/munimconsultinggroup"
                  className="instagram"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Services</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Accounting</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Tax</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Loan</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Company Related</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Business Management</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Training</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Koteshwor <br />
                Kathmandu, Nepal
                <br />
                <strong>Phone:</strong> +977 9860701995, 9849938446
                <br />
                <strong>Email:</strong> munimconsultinggroup@gmail.com,
                contact@munimconsultinggroup.com.np
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>FlexStart</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
