import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./KokanCarousel.css";

// Import images properly
import kokan1 from "../assets/kokan/kokan1.jpg";
import kokan3 from "../assets/kokan/kokan3.jpg";
import kokan6 from "../assets/kokan/kokan6.avif";

const carouselData = [
  {
    id: 1,
    title: "The enduring legacy of Durgi Stone Carvings",
    subtitle: "Carving stories in limestones",
    location: "Maharashtra",
    image: kokan1,
  },
  {
    id: 2,
    title: "Scenic Beauty of Mahabaleshwar",
    subtitle: "Strawberry fields & lush landscapes",
    location: "Maharashtra",
    image: kokan3,
  },
  {
    id: 3,
    title: "Exploring the Backwaters of Maharashtra",
    subtitle: "A serene experience",
    location: "Maharashtra",
    image: kokan6,
  },
];

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const KokanCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container ">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id} className="carousel-slide">
            <div
              className="background"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* <div className="overlay">
                <h3 className="location">{item.location}</h3>
                <h1 className="title">{item.title}</h1>
                <p className="subtitle">{item.subtitle}</p>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KokanCarousel;
