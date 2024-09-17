"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Determine if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = isMobile
    ? [
        { image: "https://media.gumbytes.com/1mobile.png" },
        { image: "https://media.gumbytes.com/2mobile.png" },
        { image: "https://media.gumbytes.com/3mobile.png" },
      ]
    : [
        { image: "https://media.gumbytes.com/1.png" },
        { image: "https://media.gumbytes.com/2.png" },
        { image: "https://media.gumbytes.com/3.png" },
      ];

  return (
    <div className="relative h-[75vh] w-full border-b border-ui-border-base overflow-hidden">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[75vh]">
            <a href="/store">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
