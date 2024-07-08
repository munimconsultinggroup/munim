"use client";

import { useState, useEffect } from "react";

const NavbarToggleButton = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  // Add a useEffect hook to toggle the class when isNavExpanded changes
  useEffect(() => {
    const navElement = document.querySelector("nav");
    if (isNavExpanded) {
      navElement.classList.add("navbar-mobile");
    } else {
      navElement.classList.remove("navbar-mobile");
    }
  }, [isNavExpanded]);

  return (
    <i className="mx-2">
      <span
        className={`bi bi-nav ${
          isNavExpanded ? "bi-x" : "bi-list"
        } mobile-nav-toggle`}
        onClick={handleNavClick}
      ></span>
    </i>
  );
};

export default NavbarToggleButton;
