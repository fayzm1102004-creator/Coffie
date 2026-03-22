import React from 'react';
import bg from '../../img/bg.jpg';
import './Footer.css';
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="main-footer"> {/* Added a class for main footer styling */}
      {/* Background Image - positioned absolutely within the footer */}
      <img src={bg} alt='footer background' className="footer-bg-img" />

      {/* Dark Overlay - positioned absolutely over the image */}
      <div className="footer-dark-overlay"></div> 

      {/* Footer Content Wrapper - positioned relatively, on top of overlays */}
      <div className="footer-content-wrapper">
        <div className="d-flex-fot">
          {/* Column 1: Get In Touch */}
          <div className="footer-column">
            <h3>Get In Touch</h3>
            <p>123 Giza, Egypt</p>
            <p>+20 111 763 6138</p>
            <p>fayzm5575@gmail.com</p>
          </div>
          {/* Column 2: Follow Us */}
          <div className="footer-column">
            <h3>Follow Us</h3>
            <p>Amet elitr vero magna sed ipsum sit <br /> kasd sea elitr lorem rebum</p>
            <div className="social-icons"> {/* Wrapper for social icons */}
              <CiTwitter />
              <IoLogoInstagram />
              <FaFacebookF />
              <FaWhatsapp />
            </div>
          </div>
          {/* Column 3: Open Hours */}
          <div className="footer-column">
            <h3>Open Hours</h3>
            <p>Monday - Friday<br />8:00 AM - 8:00 PM</p>
            <p>Saturday - Sunday<br />2:00 PM - 8:00 PM</p>
          </div>
          {/* Column 4: Newsletter */}
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Amet elitr vero magna sed ipsum sit <br /> kasd sea elitr lorem rebum</p>
            {/* You can add an input/button here if needed */}
          </div>
        </div>

        {/* Copyright Text */}
        <div className="footer-copyright-text">
          <p>Copyright © fayez mohammed All Rights Reserved.</p>
          <p>Designed by HTML Codex Distributed by fayez mohammed</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;