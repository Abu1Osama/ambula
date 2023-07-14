import React, { useEffect, useState } from "react";

import axios from "axios";
import Moviecard from "../Movies/Moviecard";
import "../Movies/Movie.css";
import Navbar from "../../Components/Navbar/Navbar";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7e47368dc262a55c9d2e8fbf9af6cfac&language=en-US&page=${page}`
      )
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
    <Navbar/>
        <div className="movielist-details-child">
          <h1 className="movielist-details-child-heading" >Movie List</h1>
          <div className="movie-list">
            {movies.map((movie) => (
              <Moviecard key={movie.id} data={movie} />
            ))}
          </div>
        </div>

      <div className="pagination">
        <a
          style={{ textDecoration: "none", fontSize: "20px", margin: "25px" }}
          href="#"
          onClick={nextPage}
        >
          {" "}
          <button className="pagi"> Page {page + 1}</button>
        </a>
      </div>
    </>
  );
}

export default Movies;
