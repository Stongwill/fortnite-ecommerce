import React from "react";

export default function CardItem({
  id,
  name,
  description,
  price,
  interest,
  images,
  addToCart,
}) {
  return (
    <div className="card__items">
      <img
        src={images.background}
        alt={name}
        className="card__images"
        width={167}
        height={180}
      />
      <div className="card__border">
        <h2 className="card__title">{name}</h2>
        <p className="card__txt">{description}</p>
        <div className="card__inner-price">
          <p className="card__price"> Цена: {price}</p>
          <p className="card__interest">Интерес: {interest}</p>
        </div>
        <button
          className="card__btn"
          onClick={() => addToCart({ id, name, price })}
        >
          Купить
        </button>
      </div>
    </div>
  );
}
