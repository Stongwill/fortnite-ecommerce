import React from "react";

export default function CartItem({
  id,
  name,
  price,
  quantity,
  removeFromCart,
  incrementCount,
  decrementCount,
}) {
  return (
    <div className="cartitem">
      <button
        className="cartitem__remove-item"
        onClick={() => removeFromCart(id)}
      >
       ✖️
      </button>
      <p className="cartitem__name">
        Наименование: <span>{name}</span>
      </p>
      <p className="cartitem__price">
        Цена: <span> {price}</span>
      </p>
      <div className="cartitem__quantity">
        <p className="cartitem__txt">
          Количество:
          <span>
            <button
              className="quantity__btn increment"
              onClick={() => incrementCount(id)}
            >
             ➕
            </button>
            {quantity}
            <button
              className="quantity__btn"
              onClick={() => decrementCount(id)}
            >
             ➖
            </button>
          </span>
        </p>
      </div>
    </div>
  );
}
