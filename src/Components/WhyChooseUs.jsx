import React from "react";
import "../styles/Card.scss";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      image: "https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=612x612&w=0&k=20&c=1ZR02c1UKfGdBCNWzzKlrwrVZuEiOqnAKcKF4V_t038=",
      title: "Expert Team",
      description: "We ensure top-notch quality in all our offerings."
    },
    {
      image: "https://media.istockphoto.com/id/1334591614/photo/man-using-digital-tablet-online-connect-to-internet-banking-currency-exchange-online-shopping.jpg?s=612x612&w=0&k=20&c=nejA5SuHcN2fAdO7Bkaf9pJrwzyLPBCyOLZgMaslGko=",
      title: "Quality Services",
      description: "Our experienced team delivers exceptional results."
    },
    {
      image: "https://imageio.forbes.com/specials-images/dam/imageserve/1143690000/960x0.jpg?format=jpg&width=1440",
      title: "Customer Satisfaction",
      description: "We prioritize customer satisfaction above all."
    }
  ];

  return (
    <div className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="card-container">
        {features.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
