"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
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

  const slides = [
    { image: "https://media.gumbytes.com/1.png" },
    { image: "https://media.gumbytes.com/2.png" },
    { image: "https://media.gumbytes.com/3.png" },
  ];

  return (
    <div className="relative h-[75vh] w-full overflow-hidden">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <a href="/store">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
