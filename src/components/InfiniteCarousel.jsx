import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutUs.css";

import img1 from "../assets/images/About Us/Carousel/Carousel1.png";
import img2 from "../assets/images/About Us/Carousel/Carousel2.png";
import img3 from "../assets/images/About Us/Carousel/Carousel3.png";
import img4 from "../assets/images/About Us/Carousel/Carousel4.png";
import img5 from "../assets/images/About Us/Carousel/Carousel5.png";
import img6 from "../assets/images/About Us/Carousel/Carousel6.png";
import img7 from "../assets/images/About Us/Carousel/Carousel7.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

const repeatedImages = [...images, ...images];

const InfiniteCarousel = () => {
    return (
      <div className="fashion-section p-3">
        {/* Title */}
        <div className="title-container text-center">
          <h4 className="subtitle">AVASARA</h4>
          <h1 className="carousel-title">
            GREAT STYLE <span className="outlined">NEVER DIES</span>
          </h1>
        </div>

        {/* Slider */}
        <div className="slider">
          <div className="list">
            {repeatedImages.map((src, index) => (
              <div
                className="item"
                key={index}
                style={{ "--position": (index % images.length) + 1 }}
              >
                <img src={src} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default InfiniteCarousel;
