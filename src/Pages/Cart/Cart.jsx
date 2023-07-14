import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../Cart/Cart.css";
import Navbar from "../../Components/Navbar/Navbar";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemsToRemove, setItemsToRemove] = useState([]);
  const [total_product, setTotalProduct] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart_items")) || [];
    if (cartData.length > 0) {
      setItems(cartData);
    } else {
      toast.error("No items in the cart");
    }
    let sum = 0;

    cartData.forEach((item) => {
      const itemTotal = item.price;
      sum += +itemTotal;
    });
    setTotalPrice(sum);
    setTotalProduct(cartData.length);
  }, []);

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);

    let sum = 0;
    updatedItems.forEach((item) => {
      const itemTotal = item.price;
      sum += +itemTotal;
    });
    setTotalPrice(sum);
    setTotalProduct(updatedItems.length);

    toast.success("Item removed!", {
      style: {
        borderRadius: "50px",
        background: "#c0c2c0",
        color: "black",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });

    localStorage.setItem("cart_items", JSON.stringify(updatedItems));
  };

  return (
    <>
        <Navbar/>
    
    <div className="cart-container" id="cart-container">
      <div className="top">
        <h2>Total Products in Cart: {total_product}</h2>
        <h2>
          <span>Subtotal:</span> ₹ {totalPrice.toFixed(2)}
        </h2>
      </div>
      {items.length > 0 ? (
        <div className="cart-items">
          {items.map((product, index) => (
            <div
              key={index}
              className={`cart-item ${
                itemsToRemove.includes(index) ? "removed" : ""
              }`}
            >
              <img src={product.image} alt="Product Image" />
              <h2 className="cart-name">{product.name}</h2>
              <strong style={{textAlign:"center"}}>₹ {product.price}</strong>
              <button onClick={() => handleDelete(index)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2p4bHhhNm1tcnF0ejVuMzVsdWM3MmI4YjdqbWtpM3UzN3psanIyZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/giXLnhxp60zEEIkq8K/giphy.gif" alt="" />
          <Link to="/shopping">
            <button className="add-to-cart-btn">Go to Products</button>
          </Link>
        </div>
      )}
    </div>
    </>

  );
};

export default Cart;
