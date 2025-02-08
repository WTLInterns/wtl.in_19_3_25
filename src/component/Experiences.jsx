import React, { useState } from "react";
import "./Experiences.css"; // Import CSS
import kokan1 from "../assets/kokan/kokan1.jpg"; // Sample image

const experiences = [
  {
    id: 1,
    title: "Exploring Nagpur's gastronomy",
    image: kokan1,
  },
  {
    id: 2,
    title: "Exploring Nagpur's Rich Heritage and Sacred Sites",
    image: kokan1,
  },
  {
    id: 3,
    title: "Karpur Baoli Ramtek: 1200yr Old Ancient Temple!",
    image: kokan1,
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
