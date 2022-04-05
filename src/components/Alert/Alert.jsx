import React from "react";
import { useEffect } from "react";

export default function Alert({ name, setAlertName }) {
  const closeAlert = () => {
    setAlertName("");
  };
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  return (
    <div id="alert__popup">
      <div className="popup__top">{name} добавлен в корзину</div>
    </div>
  );
}
