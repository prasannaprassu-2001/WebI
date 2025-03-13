import React from "react";
import "../styles/MarqueeNews.scss";


const MarqueeNews = ({ newsItems }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {newsItems.map((news, index) => (
          <span key={index} className="marquee-item">
            {news} 🔥
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeNews;
