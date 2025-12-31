import React, { createContext, useState } from "react";

export const FlorivaContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <FlorivaContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </FlorivaContext.Provider>
  );
};

export default Context;
