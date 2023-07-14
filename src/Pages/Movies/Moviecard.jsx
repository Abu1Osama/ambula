import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Movies/Movie.css";

function MovieCard({ data }) {
  let { title, poster_path, release_date, vote_average, overview } = data;
  poster_path = "https://image.tmdb.org/t/p/w500/" + poster_path;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getRatingColor = () => {
    if (vote_average < 7) {
      return "tomato";
    } else if (vote_average >= 7 && vote_average < 8) {
      return "#29AAE1";
    } else {
      return "#00C893";
    }
  };

  return (
    <div
      className={`movie-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="movie-img-box">
        <img src={poster_path} alt="" />
      </div>
      <div className="movie-content">
        <h3>{title}</h3>
        <span>⭐Ratings: <strong style={{ background: getRatingColor() }}>
         {vote_average.toFixed(1)}
        </strong></span>
        <p>Released on: {release_date}</p>
        <div className={`description-overview ${hovered ? "hovered" : ""}`}>
          <p>{overview}</p>
          <button className="description-overview-btn">Watch Now</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
