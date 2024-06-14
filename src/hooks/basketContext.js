import React, { createContext, useState } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;