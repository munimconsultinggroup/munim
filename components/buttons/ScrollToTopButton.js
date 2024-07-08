"use client";

import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible); // Cleanup function
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-top d-flex align-items-center justify-content-center ${
        isVisible ? "active" : ""
      }`}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
