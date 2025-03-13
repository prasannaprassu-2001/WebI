import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="about">
          <h1>The NextWebI Journey</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos aspernatur qui incidunt nihil corporis quo eaque distinctio sapiente velit?
          </p>
        </div>

        <div className="links-container">
          <div className="links">
            <h1>Courses</h1>
            <ul>
              <li>Web Development</li>
              <li>Software Development</li>
              <li>Apps Development</li>
              <li>E-learning</li>
            </ul>
          </div>
          <div className="links">
            <h1>Links</h1>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="contact">
          <h1>Get In Touch</h1>
          <div className="email-input">
            <input type="text" placeholder="Enter your email" />
            <button>Go</button>
          </div>
          
          <div className="social-icons">
            <a href="/#">
              <FaWhatsapp />
            </a>
            <a href="/#">
              <FaInstagram />
            </a>
            <a href="/#">
              <TbWorldWww />
            </a>
            <a href="/#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
