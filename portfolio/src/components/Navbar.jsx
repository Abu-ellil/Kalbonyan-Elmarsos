import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../style/navbar.css"
import { useState, useEffect } from "react";


function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
const [ico, setIco] = useState(faBars);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const servicesSection = document.getElementById("services");
      const portfolioSection = document.getElementById("portfolio");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setActiveLink("home");
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < servicesSection.offsetTop
      ) {
        setActiveLink("about");
      } else if (
        scrollPosition >= servicesSection.offsetTop &&
        scrollPosition < portfolioSection.offsetTop
      ) {
        setActiveLink("services");
      } else if (
        scrollPosition >= portfolioSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setActiveLink("portfolio");
      } else if (scrollPosition >= contactSection.offsetTop) {
        setActiveLink("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">
         <img src="../../public/me1.ico" alt="" />
      </a>
      <div id="menu-icon" className="fa-solid">
        <FontAwesomeIcon icon={ico} />
      </div>
      <nav className="navbar">
        <a href="#home" className={activeLink === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activeLink === "about" ? "active" : ""}>
          About
        </a>
        <a
          href="#services"
          className={activeLink === "services" ? "active" : ""}
        >
          Services
        </a>
        <a
          href="#portfolio"
          className={activeLink === "portfolio" ? "active" : ""}
        >
          Portfolio
        </a>
        <a href="#contact" className={activeLink === "contact" ? "active" : ""}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;

