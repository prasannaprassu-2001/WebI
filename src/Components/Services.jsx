import React from "react";
import { motion } from "framer-motion";
import "../styles/Services.scss";
import { ServicesData } from "../ServicesData";


const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay, ease: "easeInOut" } },
});

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h1 className="title">Services we provide</h1>
        <div className="services-grid">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h1 className="service-title">{service.title}</h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
