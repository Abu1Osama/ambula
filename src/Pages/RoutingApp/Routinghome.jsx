import React from "react";
import Routingnav from "./Routingnav";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";

function Routinghome() {
  return (
    <div className="routing-bg">
      <Routingnav />
      <div className="welcome">
        <div className="wel-child">
          <h2>Welcome to our all-in-one platform!</h2>
          <p>
            {" "}
            Discover productivity with our todo app, entertainment with our
            movie app, and convenience with our shopping app. Join us today for
            a seamless experience of tasks, movies, and shopping in one place!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Routinghome;
