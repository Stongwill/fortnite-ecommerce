import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./header.scss";

export default function Header({order, handleShowCart}) {
 
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link to="/">
            <img
              src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614598969_40-p-fortnait-na-belom-fone-47.png"
              alt="logo-img"
              className="header__logo"
              width={130}
              height={100}
             
            />
          </Link>
          <Cart quantity={order.length} handleShowCart={handleShowCart}/>
        </div>
      </div>
    </header>
  );
}
