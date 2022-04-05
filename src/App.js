import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import Home from "./pages/Home/Home";

function App() {
  const [goods, setGoods] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const [order, setOrder] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [alertName, setAlertName] = useState('');

  useEffect(() => {
    async function goodsDB() {
      const resGoods = await axios(
        "https://fortniteapi.io/v1/items/upcoming?lang=ru",
        {
          headers: {
            Authorization: "e4e0e3b3-62958fef-e7cac509-380a48e5",
          },
        }
      );
      setGoods(resGoods.data.items);
      setPreloader(false);
    }
    goodsDB();
  }, []);

  const addToCart = (item) => {
    /* item - новый добавленный объект */
    const indexItem = order.findIndex(el => el.id === item.id);
    if (indexItem < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((el, index) => {
        if (index === indexItem) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name)
  };

  const removeFromCart = (id) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const incrementCount = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const decrementCount = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1 >= 1 ? item.quantity - 1 : 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };


  return (
    <div className="App">
      <Header order={order} handleShowCart={handleShowCart} />
      <Home
        preloader={preloader}
        goods={goods}
        addToCart={addToCart}
        showCart={showCart}
        order={order}
        handleShowCart={handleShowCart}
        removeFromCart={removeFromCart}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        alertName={alertName}
        setAlertName={setAlertName}
      />
      <Footer />
    </div>
  );
}

export default App;
