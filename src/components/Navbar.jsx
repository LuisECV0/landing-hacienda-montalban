import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="title"
      >
        Logo
      </ScrollLink>
      <div className="menu" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={handleNavLinkClick}
          >
            Quiénes somos?
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={handleNavLinkClick}
          >
            Historia
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={handleNavLinkClick}
          >
            Servicios
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={handleNavLinkClick}
          >
            Galería
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
