import React from "react";
import { Link } from "react-router-dom";


export default function Cart({ handleShowCart, quantity = 0 }) {
  return (
    <div className="cart">
      <Link to="#" className="header-link">
        <img
          src="https://i.pinimg.com/originals/eb/da/b9/ebdab98415d1cfe99877d909412acdfa.png"
          alt="cart-img"
          className="cart__img"
          width={50}
          height={50}
          onClick={handleShowCart}
        />
      </Link>
      <span className="cart__shop"> {quantity}</span>
    </div>
  );
}
