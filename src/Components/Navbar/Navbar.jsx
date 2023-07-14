import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { useNavigate } from "react-router-dom";
import openbar from "../../asset/Menu.png"
import closebar from "../../asset/Cancel (2).png"

function Navbar() {
  const [a, setA] = useState("-100%");
  const navigate = useNavigate();
  const openpopup = () => { 
    setA("0");
  };
  const closePopup = () => {
    setA("-100%");
  };

  return (
    <div className="nav" id="nav">
      <div className="logo">
        <img  onClick={() => navigate("/")} src="https://static.vecteezy.com/system/resources/previews/000/578/606/original/vector-dental-care-logo-and-symbols-template-icons-app.jpg" alt="" />
      </div>
      <div style={{ right: a }} className="nav-content">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/todo")}>Todo</li>
          <li onClick={() => navigate("/movie")}>Movie</li>
          <li onClick={() => navigate("/shopping")}>Shopping</li>
          <li onClick={() => navigate("/Route/home")}>Router</li>
        </ul>

        
        <div onClick={closePopup} className="close">
        <img src={closebar} alt="" />
        </div>
      </div>

      <div onClick={openpopup} className="menubar">
        <button>
          <img src={openbar} alt="openbar" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;