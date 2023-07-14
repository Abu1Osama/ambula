import React from "react";
import Routingnav from "../Routingnav";
import one from "../../../asset/one.png";
import two from "../../../asset/two.png";
import three from "../../../asset/three.png";

let project_data = [
  {
    title: "Movie App",
    desc: "Introducing our immersive movie app! Discover a vast collection of films from various genres. Get detailed movie information, including titles, release years, genres, and synopses. Watch trailers, read reviews, and find hidden gems. Enjoy a personalized movie-watching experience with our user-friendly app. Lights, camera, action!",
    img:three,
  },
  {
    title: "Todo App",
    desc: " Introducing a user-friendly todo app that helps you stay organized.Easily create tasks with titles and descriptions. Track task status completed or pending, set priorities, and remove tasks. Streamlineyour task management and boost productivity with this powerful app.Try it now!",
    img: one,
  },
  {
    title: "Shopping Cart",
    desc: "Welcome to our user-friendly online shopping website! Discover a wide range of products, add and remove items from your cart effortlessly,and track the total price. Enjoy a seamless and secure shopping .Start shopping today and experience convenience at its best!",
    img: two,
  },

];

function About() {
  return (
    <div className="routing-bg">
      <Routingnav />
      {project_data.map((project) => (
        <div className="about-desc">
          <img src={project.img} alt="" />
          <div className="desc-details">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
