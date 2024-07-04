import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BasketContext from '../../hooks/basketContext';
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, Button, DrawerFooter, Stack } from '@chakra-ui/react';

const BasketSummary = ({ isOpen, onClose }) => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  return (
    <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton alignItems={'flex-end'} />
        <DrawerHeader borderBottomWidth='1px'>Continue Shopping</DrawerHeader>

        <DrawerBody>

          <h2>Basket Summary</h2>
          {basket.length === 0 ? (
            <>
              <p>NOTHING IN YOUR BAG!</p>
              <p>Start shopping to see if you qualify for free shipping.</p>
            </>
          ) : (
            <ul>
              {basket.map((item, index) => (
                <li key={index}>
                  <img src={item.images[0]} alt={item.name} className="basket-summary-image" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div>
                      <Button onClick={() => addToBasket(item)}>+</Button>
                      <Button onClick={() => removeFromBasket(item)}>-</Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

        </DrawerBody>
        <DrawerFooter borderTopWidth='1px' style={{ height: 'auto' }} >
          <div>
            <p>Subtotal</p>
            <p>$0</p>
          </div>

          <Link to={'/checkout'}>
            <Button>Checkout</Button>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BasketSummary;
