import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Todos from "../Pages/Todos/Todos";
import Movies from "../Pages/Movies/Movies";
import Shopping from "../Pages/Shopping/Shopping";
import Cart from "../Pages/Cart/Cart";

import Routinghome from "../Pages/RoutingApp/Routinghome";
import Routingnav from "../Pages/RoutingApp/Routingnav";
import Contact from "../Pages/RoutingApp/Contact/Contact";
import About from "../Pages/RoutingApp/About/About";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todos />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/shopping/cart" element={<Cart />} />
      <Route path="/Route/home" element={<Routinghome />} />
      <Route path="/Route/about" element={<About />} />
      <Route path="/Route/contact" element={<Contact />} />
      <Route path="/routing/app" element={<Routingnav/>} />
    </Routes>
  );
}

export default AllRoutes;
