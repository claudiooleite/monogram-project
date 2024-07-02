import React, { useContext } from 'react';
import BasketContext from '../../hooks/basketContext';
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton } from '@chakra-ui/react';


const BasketSummary = ({ isOpen, onClose }) => {
  const { basket } = useContext(BasketContext);

  return (
    <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader borderBottomWidth='1px'>Continue Shopping</DrawerHeader>
        <DrawerBody>
          <h2>Basket Summary</h2>
          {basket.length === 0 ? (
            <p>Your Basket is empty</p>
          ) : (
            <ul>
              {basket.map((item, index) => (
                <li key={index}>
                  <img src={item.images[0]} alt={item.name} className="basket-summary-image" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer >

  );
};

export default BasketSummary;