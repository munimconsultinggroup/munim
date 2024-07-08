"use client";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NavbarToggleButton from "../buttons/NavbarToggleButton";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  // Add more links as needed
];

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
      const headerElement = document.querySelector("header");

      if (headerElement) {
        if (scrolled) {
          headerElement.classList.add("header-scrolled");
        } else {
          headerElement.classList.remove("header-scrolled");
        }
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <nav id="navbar" className="navbar">
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`nav-link ${pathname === link.path ? "active" : ""}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link href={"/contact"} className="getstarted">
            Get Started
          </Link>
        </li>
      </ul>
      <NavbarToggleButton />
    </nav>
  );
}
