import React, { createContext, useState } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket(prevBasket => {
      const existingItem = prevBasket.find(basketItem => basketItem.name === item.name);
      if (existingItem) {
        return prevBasket.map(basketItem =>
          basketItem.name === item.name
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        );
      } else {
        return [...prevBasket, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (item) => {
    setBasket(prevBasket => {
      const existingItem = prevBasket.find(basketItem => basketItem.name === item.name);
      if (existingItem.quantity === 1) {
        return prevBasket.filter(basketItem => basketItem.name !== item.name);
      } else {
        return prevBasket.map(basketItem =>
          basketItem.name === item.name
            ? { ...basketItem, quantity: basketItem.quantity - 1 }
            : basketItem
        );
      }
    });
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
