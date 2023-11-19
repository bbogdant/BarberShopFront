import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">
            <i className="fas fa-cut"></i> Services
          </Link>
        </li>
        <li className="nav-item">
        <ScrollLink to="barbers" spy={true} smooth={true} duration={500} className="nav-link">
            <i className="fas fa-user"></i> Barbers
        </ScrollLink>
        </li>
        <li className="nav-item">
          <Link to="/appointments" className="nav-link">
            <i className="far fa-calendar"></i> Appointments
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <i className="fas fa-phone"></i> Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
