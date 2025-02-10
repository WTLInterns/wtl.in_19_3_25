import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./TourismCarousel.css";

// Import images
import Ganpatipule from "../assets/kokan/ganpatipule.png";
import Alibaug from "../assets/kokan/Alibaug.png";
import Ratnagiri from "../assets/kokan/Ratnagiri.png";
import ambazariLake from "../assets/kokan/kokan1.jpg";

const places = [
  {
    id: 1,
    name: "Ganpatipule Beach",
    image: Ganpatipule,
  },
  {
    id: 2,
    name: "Alibaug",
    image: Alibaug,
  },
  {
    id: 3,
    name: "Ratnagiri",
    image: Ratnagiri,
  },
  {
    id: 4,
    name: "Ambazari Lake and Garden",
    image: ambazariLake,
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

const TourismCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <div className=" ">
      <h3>— Explore —</h3>
      <h2> ATTRACTIONS</h2>
              </div>
      <Slider {...settings}>
        {places.map((place) => (
        
          <div key={place.id} className="carousel-slide">
              
            <div className="place-card">
              <img src={place.image} alt={place.name} />
              <div className="place-name">{place.name}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TourismCarousel;
