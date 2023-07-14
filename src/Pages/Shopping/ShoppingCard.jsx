import React, { useState, useEffect } from "react";
import "../Shopping/ShoppingCard.css";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

function ShoppingCard({ data }) {
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart_items")) || [];
    const itemExists = cartItems.some((item) => item.name === data.name);
    setAddedToCart(itemExists);
  }, [data.name]);

  const addtocart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart_items")) || [];

    const itemExists = cartItems.some((item) => item.name === data.name);

    if (itemExists) {
      toast.error("Item already exists in the cart");
    } else {
      cartItems.push(data);
      localStorage.setItem("cart_items", JSON.stringify(cartItems));
      toast.success("Item added to cart");
      setAddedToCart(true);
    }
  };

  return (
    <div className="shopping-card">
      <div className="img-box">
        <img src={data.image} alt="" />
      </div>
      <div className="content">
        <h3>{data.name}</h3>
        <strong>₹ {data.price}</strong>
        <strong>⭐ {data.rating.toFixed(1)}</strong>
      </div>
   <div className="cart-go-button">
   <div className="btn">
        <button onClick={addtocart}>
          {addedToCart ? "Added to cart" : "Add to cart"}
        </button>
      </div>
      <div className="btn">
        <Link to={"/shopping/cart"}>
          <button className={addedToCart ? "" : "disabled"}>
            Buy Now
          </button>
        </Link>
      </div>
   </div>
    </div>
  );
}

export default ShoppingCard;
