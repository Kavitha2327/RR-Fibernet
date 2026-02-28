import React, { useState, useEffect } from "react";

const Services = () => {
  const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg","/4.jpeg", "/5.jpeg", "/6.jpeg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="carousel-slide" key={i}>
            <img src={img} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;



  
