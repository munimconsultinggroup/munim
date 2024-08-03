import React from "react";
import faqsData from "./faqs.json";

const FAQs = () => {
  return (
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Frequently Asked Questions</p>
        </header>

        <div className="row">
          <div className="col-lg-6">
            {/* F.A.Q List */}
            {faqsData
              .slice(0, Math.ceil(faqsData.length / 2))
              .map((faq, index) => (
                <div
                  className="accordion accordion-flush"
                  key={index}
                  id={`faqlist${index + 1}`}
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-content-${index + 1}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`faq-content-${index + 1}`}
                      className="accordion-collapse collapse"
                      data-bs-parent={`#faqlist${index + 1}`}
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="col-lg-6">
            {/* F.A.Q List */}
            {faqsData
              .slice(Math.ceil(faqsData.length / 2))
              .map((faq, index) => (
                <div
                  className="accordion accordion-flush"
                  key={index}
                  id={`faqlist${index + 1}`}
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq2-content-${index + 1}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`faq2-content-${index + 1}`}
                      className="accordion-collapse collapse"
                      data-bs-parent={`#faqlist2`}
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
