/* eslint-disable no-unused-vars */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../component/GoaTour.css";
import {  useNavigate } from "react-router-dom";


const images = [
  "src/assets/images/goa2.jpg",
  "/src/assets/images/goa.jpg",
  "/src/assets/images/goa1.jpg"

];

const tourPackages = [
  {
    id: 1,
    title: "Goa Fun Retreat",
    description: "Goa Fun Retreat is the perfect family getaway, offering a mix of relaxation and adventure. Enjoy pristine beaches, exciting water sports, scenic nature trails..",

    image: "/src/assets/Images/goa4.avif"
  },
  {
    id: 2,
    title: "Romantic Rendezvous",
    description: "Romantic Rendezvous Retreat is the ultimate escape for couples seeking love and relaxation. ",

    image: "/src/assets/Images/goa5.avif"
  },
  {
    id: 3,
    title: "Goa Getaway Bonanza",
    description: "Enjoy a relaxing family trip with comfortable stays and activities.",

    image: "/src/assets/Images/goa6.avif"
  },
  {
    id: 4,
    title: "Basilica of Bom Jesus",
    description: "The Basilica of Bom Jesus is one of Goa’s most famous landmarks and a UNESCO World Heritage Site. This 400-year-old church houses the mortal remains of St. Francis Xavier ",

    image: "/src/assets/Images/church-goa.jpg"
  },
  {
    id: 5,
    title: "Baga Beech",
    description: "Baga Beach is one of Goa’s most popular and lively beaches, famous for its vibrant nightlife, water sports, and beach shacks",

    image: "/src/assets/Images/baga-beech-goa.jpg"
  },
  {
    id: 6,
    title: "Dudhsagar Waterfall",
    description: "Dudhsagar Waterfalls, one of India’s tallest waterfalls, is a breathtaking four-tiered cascade located on the Goa-Karnataka border. ",

    image: "/src/assets/Images/Dudhsagar-Waterfalls.jpg"
  },

];

function GoaTour() {
  return (
    <div className="carousel-container">
      <Carousel
        useKeyboardArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        dynamicHeight={false}
        interval={3000}
        transitionTime={1000}
      >
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt={`Goa Tour ${index + 1}`} src={URL} className="carousel-image" />
          </div>
        ))}
      </Carousel>

      {/* Tour Information Section */}
      <div className="tour-info">
        <h2>Explore the Beauty of Goa</h2>

        <p>
          Goa is a name that instantly resonates with energy, joy, rejuvenation and the much-needed break we need from our monotonous lives. It’s a land of greenery,  beauty, shimmering sunsets and gorgeous beaches. Goa is divided into two parts – north goa and south goa. It’s a perfect place for a quick getaway to chill with your friends, family or loved ones to ease the hectic schedule of your day-to-day lives. Next time when you visit Goa, the home of beaches and stunning sunsets, Don’t miss out on any fun as we have some fantastic ideas and recommendations for you along with exciting goa tourism packages.
        </p>

        <p>
          As for tourist attractions, the place is dotted with some of the most beautiful beaches in the country, which are its main highlights. Besides, the state also houses several other types of alluring natural tourist attractions, sites of historical significance, places of worship, and much more. So, make sure to look for Goa tour packages for couples that feature a diverse range of attractions under sightseeing.
        </p>

        <p>
          In addition to its sightseeing and stylish party culture, Goa is an excellent place for various land and water adventure activities. From laid-back activities like kayaking and hiking to thrilling parasailing and white water rafting, Goa has a lot to offer to visitors. So, pack your bags and look for ideal honeymoon packages for a Goa trip to make your dream honeymoon a reality.
        </p>

        <p className="cta">
          Book your Goa tour now and embark on an unforgettable journey filled with adventure and relaxation!
        </p>
      </div>

      <div className="container">
        <h2 className="title">Goa Tour Packages</h2>
        <div className="grid">
          {tourPackages.map((pkg) => (
            <>
              <div key={pkg.id} className="tour-card">
                <img src={pkg.image} alt={pkg.title} className="tour-image" />
                <h3  style={{marginTop:"40px"}}className="tour-title">{pkg.title}</h3>
                <p className="tour-description">{pkg.description}</p>


                <button className="book-button" >Book Now</button>
              </div>
            </>
          ))}
        </div>
      </div>


    </div>
  );
}

export default GoaTour
