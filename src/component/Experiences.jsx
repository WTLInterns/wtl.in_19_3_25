import React, { useState } from "react";
import "./Experiences.css"; // Import CSS
import kokan1 from "../assets/kokan/kokan1.jpg"; // Sample image
import kokan2 from "../assets/kokan/food.jpeg"; // Sample image
import kokan3 from "../assets/kokan/temple.jpeg"; // Sample image



const experiences = [
  {
    id: 1,
    title: "Food ",
    image: kokan2,
  },
  {
    id: 2,
    title: "Islands",
    image: kokan1,
  },
  {
    id: 3,
    title: " Old Ancient Temple!",
    image: kokan3,
  },
];

const Experiences = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id === selectedId ? null : id); // Toggle selection
  };

  return (
    <section className="experiences-section">
      <h3>— More —</h3>
      <h2>EXPERIENCES</h2>
      <div className="experiences-container">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`experience-card ${selectedId === exp.id ? "selected" : ""}`}
            onClick={() => handleSelect(exp.id)}
          >
            <img src={exp.image} alt={exp.title} />
            <div className="experience-text">{exp.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
