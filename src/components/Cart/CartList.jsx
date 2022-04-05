import React from "react";
import CartItem from "./CartItem";

import "./cart.scss";

export default function CartList({
  order,
  handleShowCart,
  totalPrice,
  removeFromCart,
  incrementCount,
  decrementCount,
}) {
  return (
    <div className="cartlist">
      <div className="container">
        <div className="cartlist__header">
          <button className="cartitem__remove-btn" onClick={handleShowCart}>
          ✖️
          </button>
          <h1 className="title">Корзина</h1>
        </div>
        <div className="cart__scroll">
        {order.length ? (
          order.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              removeFromCart={removeFromCart}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
            />
          ))
        ) : (
          <h1 className="cartlist__null">Корзина пуста</h1>
        )}
        </div>
        <div className="cartlist__footer">
          {order.length && ( <>
            <p className="cartlist__sum">
              Общая сумма заказа: <span>{totalPrice}</span>
            </p>
            <button className="cardlist__issue-btn">Оформить</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
