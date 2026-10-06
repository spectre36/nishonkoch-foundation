import logo from "../assets/logo.png";
import "../styles/home.css";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact</h4>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            106/2 Kakrail, Dhaka
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            nishonkochfoundation@gmail.com
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +880 1828159672
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <img
            src={logo}
            alt="Nishonkoch Foundation Logo"
            className="footer-logo"
          />

          <p className="footer-copyright">
            © 2026 Nishonkoch Foundation
            <br />
            All rights reserved.
          </p>
        </div>

        {/* Social Section */}
        <div className="footer-section footer-social">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/Nishonkochfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/nishonkoch_foundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/nishonkoch-foundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/@nishonkochfoundation5820"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;