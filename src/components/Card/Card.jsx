import React from "react";
import CardItem from "./CardItem";
import "./card.scss";
export default function Card({ goods, addToCart }) {
  return (
    <div className="card">
      {!goods.length && <h3 className="card__null">Ничего не найдено😥😥😥</h3>}
      {goods.map((card) => (
        <CardItem key={card.id} {...card} addToCart={addToCart} />
      ))}
    </div>
  );
}
