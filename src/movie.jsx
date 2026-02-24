import React, { useRef } from "react";
import "./movie.css";

import cover1 from "./assets/movie/cover1.png";
import cover2 from "./assets/movie/cover2.png";
import cover3 from "./assets/movie/cover3.png";

const cards = [
  { title: "Walking with Cavemen", image: cover1 },
  { title: "Quest for Fire", image: cover2 },
  { title: "Becoming Human", image: cover3 },
];

const Movie = () => {
  const maxRotation = 10;

  const handleMouseMove = (e, ref) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    ref.current.style.transition =
      "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  };

  const Card = ({ title, image }) => {
    const ref = useRef(null);

    return (
      <div className="container">
        <div
          ref={ref}
          className="card_wrap"
          onMouseMove={(e) => handleMouseMove(e, ref)}
          onMouseLeave={() => handleMouseLeave(ref)}
        >
          <div
            className="card_container"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="card_top">
              <h1>{title}</h1>
              <a href="https://www.netflix.com" className="btn">Watch Now</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
  <section id="movie" className="movie_section">
    <h2 className="movie_title">Do Watch!</h2>

    <div className="movie_grid">
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  </section>
);
};

export default Movie;