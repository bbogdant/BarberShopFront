

import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/path-to-your-logo.png" alt="Logo" />
                    <h2>Your Barber Shop</h2>
                </div>
                <ul className="footer-links">
                    <li className="footer-item">Home</li>
                    <li className="footer-item">Services</li>
                    <li className="footer-item">Barbers</li>
                    <li className="footer-item">Appointments</li>
                    <li className="footer-item">Contact</li>
                </ul>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com/your-barbershop" className="social-icon">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/your-barbershop" className="social-icon">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/your-barbershop" className="social-icon">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
