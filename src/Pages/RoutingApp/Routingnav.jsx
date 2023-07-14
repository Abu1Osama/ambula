import React from "react";
import "../RoutingApp/Routingpage.css";
import { Link } from "react-router-dom";
function Routingnav() {
  return (
    <div className="routing-top">
      <div className="routing-logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/578/606/original/vector-dental-care-logo-and-symbols-template-icons-app.jpg"
          alt=""
        />
      </div>

      <div className="routing-cat">
        <Link to={"/Route/home"}>
          {" "}
          <button className="routing-top-btn">Home</button>
        </Link>
        <Link to={"/Route/about"}>
          <button className="routing-top-btn">About</button>
        </Link>
        <Link to={"/Route/contact"}>
          <button className="routing-top-btn">Contact</button>
        </Link>
        <Link to={"/"}>
          <button className="routing-top-btn">EXIT APP</button>
        </Link>
      </div>
    </div>
  );
}

export default Routingnav;
