import React from "react";

import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import HeroImg from "../images/hero.png"; 
import "../styles/Hero.scss";

export const FadeUp = (delay) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 100, duration: 0.5, delay: delay, ease: "easeInOut" },
    },
  };
};

const Hero = () => {
  return (
    <section className="hero-section">
      
      <div className="hero-container">
       
        <div className="hero-content">
          <div className="text-wrapper">
            <motion.h1 variants={FadeUp(0.6)} initial="initial" animate="animate" className="hero-title">
              Learn to build a <span className="highlight">Website</span> for your business
            </motion.h1>
            <motion.div variants={FadeUp(0.8)} initial="initial" animate="animate" className="btn-wrapper">
              <button className="primary-btn">
                Get Started
                <IoIosArrowRoundForward className="arrow-icon" />
              </button>
            </motion.div>
          </div>
        </div>
       
        <div className="hero-image-container">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroImg}
            alt="Hero"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;