import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import JyotilingasDetails from "./JyotilinghasDetails";
import { Link } from "react-router-dom";  // Import Link

import busImage1 from "../assets/Images/img11.jpeg";
import busImage2 from "../assets/Images/img22.jpeg";
import busImage3 from "../assets/Images/img3.jpeg";
import busImage4 from "../assets/Images/img4.jpeg";
import busImage5 from "../assets/Images/img5.jpeg";
import busImage6 from "../assets/Images/img6.jpeg";
import busImage7 from "../assets/Images/img7.jpeg";
import busImage8 from "../assets/Images/img8.jpeg";
import Main1 from "../assets/Images/main1.webp";
import Main2 from "../assets/Images/main2.webp";
import Main3 from "../assets/Images/main3.webp";

const Home = () => {
  // Data for the 12 Jyotirlingas
  
  const jyotirlingas = [
    "Somnath (Gujarat)",
    "Mallikarjuna (AndhraPradesh)",
    "Mahakaleshwar (MadhyaPradesh)",
    "Omkareshwar (MadhyaPradesh)",
    "Kedarnath (Uttarakhand)",
    "Bhimashankar (Maharashtra)",
    "Vishwanath (UttarPradesh)",
    "Ramanath (TamilNadu)",
    "Nageshwar (Gujarat)",
    "Tryambakeshwar (Maharashtra)",
    "Adhyashankar (Himalayas)",
    "Grishneshwar (Maharashtra)"  ];

  // Bus and Car Packages Data (including price and image URL)
  const busPackages = [
    { 
      name: "Ac Sleeper Bus Package", 
      description: "7 Days, 6 Nights, Full tour of Jyotirlingas", 
      price: "$800", 
      imageUrl: busImage1 
    },
    { 
      name: "NonAc Sleeper Bus Package ", 
      description: "5 Days, 4 Nights, Limited Jyotirlingas", 
      price: "$600", 
      imageUrl: busImage2 
    },
    { 
      name: "Ac Seater Bus Package ", 
      description: "10 Days, 9 Nights, Full Circle of Jyotirlingas", 
      price: "$1200", 
      imageUrl: busImage3
    },
    { 
      name: "NonAc Seater Package ", 
      description: "3 Days, 2 Nights, Budget Tour", 
      price: "$400", 
      imageUrl: busImage4
    }
  ];

  const carPackages = [
    { 
      name: "HatchBacks", 
      description: "7 Days, 6 Nights, with luxury car service", 
      price: "$1500", 
      imageUrl: busImage5 
    },
    { 
      name: "Sedan", 
      description: "5 Days, 4 Nights, premium car options", 
      price: "$1300", 
      imageUrl: busImage6
    },
    { 
      name: "Ertiga", 
      description: "8 Days, 7 Nights, private car service", 
      price: "$2000", 
      imageUrl: busImage7
    },
    { 
      name: "Innova Crysta", 
      description: "3 Days, 2 Nights, SUV travel", 
      price: "$1000", 
      imageUrl: busImage8
    }
  ];
  const navigate = useNavigate(); // Hook for navigation


  return (
    <div className="home-container">
      {/* Jyotirlingas Tour Information */}
      <div className="jyotirlingas-info">
        <h2>12 Jyotirlingas Tour</h2>
        <div className="jyotirlingas-list">
  {jyotirlingas.map((jyotirlinga, index) => (
    <div 
      key={index} 
      className="jyotirlinga-item" 
      onClick={() => navigate(`/jyotirlinga/${jyotirlinga}`)}
      style={{ cursor: "pointer", color: "blue", textDecoration: "none" }}
    >
<Link
                to={`/jyotirlinga/${encodeURIComponent(jyotirlinga)}`}
                style={{ cursor: "pointer", color: "blue", textDecoration: "none" }}
              >
                <p>{jyotirlinga}</p>
              </Link>
    </div>
  ))}
</div>
      </div>

      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="1000">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Main1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Main2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Main3} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


      {/* Tour Packages */}
      <div className="tour-packages">
        <h2>Jyotirlingas Tour Packages</h2>
        
        {/* Bus Packages */}
        <div className="bus-packages">
          <h3>Bus Packages</h3>
          <div className="package-list">
            {busPackages.map((packageInfo, index) => (
              <div key={index} className="package-item">
                <img src={packageInfo.imageUrl} alt={packageInfo.name} className="package-image" />
                <h4>{packageInfo.name}</h4>
                <p>{packageInfo.description}</p>
                <p><strong>Price:</strong> {packageInfo.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Car Packages */}
        <div className="car-packages">
          <h3>Car Packages</h3>
          <div className="package-list">
            {carPackages.map((packageInfo, index) => (
              <div key={index} className="package-item">
                <img src={packageInfo.imageUrl} alt={packageInfo.name} className="package-image" />
                <h4>{packageInfo.name}</h4>
                <p>{packageInfo.description}</p>
                <p><strong>Price:</strong> {packageInfo.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry Button */}
      <div className="inquiry-button-container">
        <Link to="/jyotirlinga-form">
          <button className="inquiry-button">Inquiry Form</button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
