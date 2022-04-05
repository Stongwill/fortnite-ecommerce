import React from "react";

import Preloader from "./../../components/Preloader/Preloader";
import Card from "./../../components/Card/Card";
import CartList from "./../../components/Cart/CartList";
import Alert from "../../components/Alert/Alert";

export default function Home({
  preloader,
  goods,
  addToCart,
  showCart,
  order,
  handleShowCart,
  removeFromCart,
  incrementCount,
  decrementCount,
  setAlertName,
  alertName
}) {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <main className="home">
      <div className="container">
        {preloader ? (
          <Preloader /> 
        ) : (
          <Card goods={goods} addToCart={addToCart} />
        )}

        { alertName && <Alert name={alertName} setAlertName={setAlertName}/>} 
        {showCart && (
          <CartList
            order={order}
            handleShowCart={handleShowCart}
            totalPrice={totalPrice}
            removeFromCart={removeFromCart}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        )}
      </div>
    </main>
  );
}
