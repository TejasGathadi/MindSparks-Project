import React from "react";
import "../css/Footer.css";
import phoneIcon from "../images/phone.png"; // Replace with your actual path
import whatsappIcon from "../images/whatsapp.png"; // Replace with your actual path
import instagramIcon from "../images/instapng.webp"; // Replace with your actual path
import emailIcon from "../images/mail.png"; // Replace with your actual path
import facebookIcon from "../images/facebook.png"; // Replace with your actual path
import logo from "../images/mindsparklogo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>
                <b>Contact Us</b>
              </h3>
              <div className="row">
                <div className="col-md-4">
                  <div className="contact-group mt-3">
                    <a href="tel:+91-7083355999" className="contact-link">
                      <img src={phoneIcon} alt="Phone" />
                      <span>+91-70833 55999</span>
                    </a>
                    <a
                      href="https://wa.me/9356214544"
                      className="contact-link mt-4"
                    >
                      <img src={whatsappIcon} alt="WhatsApp" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-group mt-3">
                    <a
                      // href="https://instagram.com/yourprofile"
                      className="contact-link"
                    >
                      <img src={instagramIcon} alt="Instagram" />
                      <span>Instagram</span>
                    </a>
                    <a
                      // href="mailto:info@example.com"
                      className="contact-link mt-4"
                    >
                      <img src={emailIcon} alt="Email" />
                      <span>info@example.com</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-group mt-3">
                    <a
                      // href="https://facebook.com/yourprofile"
                      className="contact-link"
                    >
                      <img src={facebookIcon} alt="Facebook" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3>
                <b>Office Address</b>
              </h3>
              <div className="address-info">
                <p>
                  Office No. 14, Meera Complex, Near Ideal Colony, Pune - 411038
                </p>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434507274!2d-122.08424968468366!3d37.42200414517917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857d5d8f65a8f7%3A0x500ef6143a38d10!2sGoogleplex!5e0!3m2!1sen!2sus!4v1634547375678!5m2!1sen!2sus"
                    width="75%"
                    height="100"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center">
              <img src={logo} alt="Logo" className="footer-logo" />
              <p className="copyright">
                © 2025 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
