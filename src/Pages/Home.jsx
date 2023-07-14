import React from "react";
import { Link } from "react-router-dom";
import "../Pages/Home.css";
import Navbar from "../Components/Navbar/Navbar";

function Home() {
  return (
    <>
    <h1 className="tagline">Discover a World of Possibilities with Our Multi-App Suite</h1>
      <div className="diamond-container">
        
        <div className="diamond">
          <div className="diamond-content">
            <h2>Welcome to Your Task Manager</h2>
            <p>
              Stay organized and manage your tasks effectively with our Todo
              App.
            </p>
            <Link to={"/todo"}>
              <button>Go To Todo App</button>
            </Link>
          </div>
        </div>
        <div className="diamond">
          <div className="diamond-content">
            <h2>Discover Your Shopping Cart</h2>
            <p>
              Find and purchase your favorite products with our Shopping Cart.
            </p>
            <Link to={"/shopping"}>
              <button>Go To Shopping Cart</button>
            </Link>
          </div>
        </div>
        <div className="diamond">
          <div className="diamond-content">
            <h2>Explore the World of Movies</h2>
            <p>
              Get access to a vast collection of movies and explore the world of
              cinema with our Movie App.
            </p>
            <Link to={"/movie"}>
              <button>Go To Movie App</button>
            </Link>
          </div>
        </div>
        <div className="diamond">
          <div className="diamond-content">
            <h2>Routing Made World Easy</h2>
            <p>
              Experience seamless navigation and routing with our Routing App.
            </p>
            <Link to={"/Route/home"}>
              <button>Go To Routing App</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
