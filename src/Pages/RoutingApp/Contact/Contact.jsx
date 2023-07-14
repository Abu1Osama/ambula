import React, { useState } from "react";
import "../Contact/Contact.css";
import Routingnav from "../Routingnav";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="routing-bg">
      <Routingnav />

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_child">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form_child">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form_child">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
