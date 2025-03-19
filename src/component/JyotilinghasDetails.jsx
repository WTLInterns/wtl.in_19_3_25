/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import "./JyotilinghasDetails.css";

// Importing all the images
import bhimashankar from "../assets/Images/Bhimashankar.jpg";
import tryambakeshwar from "../assets/Images/trimbakeshwar.jpg";
import grishneshwar from "../assets/Images/grishneshwar.jpeg";
import aundhaNagnath from "../assets/Images/AundhaNagnath.jpg";
import parliVaijnath from "../assets/Images/ParliVaijnath.jpg";




// Jyotirlinga information
const jyotirlingaInfo = {
  "Bhimashankar Jyotirlinga (Pune, Maharashtra)": {
    description: "Bhimashankar Jyotirlinga, nestled in the Sahyadri hills of Maharashtra, is one of the 12 sacred Jyotirlingas dedicated to Lord Shiva. Located near Pune, this temple is surrounded by lush greenery and is a part of the Bhimashankar Wildlife Sanctuary. It is believed that Lord Shiva manifested here to defeat the demon Tripurasura, earning the name Bhimashankar. The temple architecture showcases ancient Hemadpanthi style, featuring intricate carvings and an aura of divine energy. The river Bhima originates from this sacred site, adding to its spiritual significance. Devotees visit in large numbers, especially during Mahashivaratri and Shravan month. The region also attracts trekkers and nature lovers due to its dense forests and scenic beauty.",
    NearbyAttractions:"Bhimashankar Wildlife Sanctuary, Hanuman Lake, Gupt Bhimashankar, Bombay Point.",
    image: bhimashankar,
  },
  "Trimbakeshwar Jyotirlinga (Nashik, Maharashtra)": {
    description: "Trimbakeshwar Jyotirlinga, located in Nashik, Maharashtra, holds immense religious importance as the origin of the holy Godavari River. The temple, built by Peshwa Balaji Baji Rao, is unique as the Jyotirlinga represents Brahma, Vishnu, and Mahesh (Shiva) in one divine form. The black stone temple showcases intricate carvings and a sacred Kunda (water tank) known as Kushavarta, believed to be the source of the Godavari. Trimbak is also associated with the legend of Gautama Rishi and Varun Deva. Pilgrims visit for Narayan Nagbali Puja, Kalsarpa Dosha Puja, and other Vedic rituals. The temple sees a massive influx of devotees during Kumbh Mela, held once every 12 years.",
    NearbyAttractions: "Anjaneri Hills (birthplace of Lord Hanuman), Brahmagiri Hills, Kushavarta Kund, Ganga Dwar.",
     image:  tryambakeshwar ,
  },
  "Grishneshwar Jyotirlinga (Aurangabad, Maharashtra)": {
    description: "Grishneshwar, also known as Ghushmeshwar Jyotirlinga, is located near the famous Ellora Caves in Aurangabad, Maharashtra. The temple, built using red sandstone, exhibits stunning carvings and features a five-tiered Shikhara. The legend states that a devout woman named Kusuma restored her son’s life through intense devotion to Lord Shiva, after which Shiva manifested as a Jyotirlinga. The temple, rebuilt by Ahilyabai Holkar, is one of the smallest yet most spiritually significant Jyotirlingas. Devotees believe that worshiping here grants peace, prosperity, and liberation from past karmas.",
    NearbyAttractions: "Ellora Caves (UNESCO World Heritage Site), Daulatabad Fort, Bhadra Maruti Temple.",
     image:  grishneshwar,
  },
  "Aundha Nagnath Jyotirlinga (Hingoli, Maharashtra)": {
    description: "Aundha Nagnath, the first Jyotirlinga among the 12, is located in Hingoli, Maharashtra. It is believed that the Pandavas built this temple during their exile. The Jyotirlinga is associated with Lord Shiva and Lord Vishnus incarnation, Nageshwar. The temple structure, over 2000 years old, showcases Hemadpanthi architecture with intricate carvings and a huge Sabha Mandap supported by strong stone pillars. A unique feature of this temple is that devotees worship the Linga from the underground chamber. The temple is believed to fulfill wishes, especially for those seeking relief from serpent-related fears and doshas.",
    NearbyAttractions: "Nanded Gurudwara, Sant Namdev Sansthan, Tulja Devi Temple.",
     image: aundhaNagnath,
  },
  " Parli Vaijnath Jyotirlinga (Beed, Maharashtra)": {
    description: "Parli Vaijnath Jyotirlinga, located in Beed, Maharashtra, is considered a Dhanvantari (healer) Jyotirlinga, believed to cure diseases and grant longevity. The temple is built on a small hill, with devotees climbing around 250 steps to reach the sanctum. The Shivalinga is worshiped with holy water, honey, and Bilva leaves. According to legend, Ravana tried to take this Jyotirlinga to Lanka, but Lord Vishnu caused him to drop it here. The temple follows unique rituals, allowing direct Abhishekam (ritual bathing) of the Jyotirlinga by devotees. Mahashivaratri and Shravan Maas see a massive gathering of Shiva devotees.",
    NearbyAttractions: "Kankaleshwar Temple, Ambejogai, Sant Janabai Samadhi",
    image: parliVaijnath,
  },
};

const JyotilingasDetails = () => {
  const { name } = useParams(); // Get the Jyotirlinga name from URL params

  // Normalize name (handle extra spaces and case-insensitive comparison)
  const formattedName = name?.trim().toLowerCase();

  // Normalize keys in jyotirlingaInfo to avoid case issues
  const normalizedJyotirlingaInfo = Object.keys(jyotirlingaInfo).reduce((acc, key) => {
    acc[key.trim().toLowerCase()] = jyotirlingaInfo[key];
    return acc;
  }, {});

  // Get information based on the formatted name
  const info = normalizedJyotirlingaInfo[formattedName] || {
    description: "Information not available.",
    image: bhimashankar, // Default image
  };

  // Debugging logs (Check console if facing issues)
  console.log("URL Param:", name);
  console.log("Formatted Name:", formattedName);
  console.log("Info Object:", info);

  return (
    <div className="details-container">
      <img src={info.image} alt={formattedName} className="details-image" />
      <h2>{name}</h2>
      <p>{info.description}</p>
    </div>
  );
};


export default JyotilingasDetails;

