import { useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import BasketContext from "../../hooks/basketContext";
import BasketSummary from "./PreviewBasket";
import AccordionInfo from "./AccordionInfo";
import "./shop-product.css";


function ProductCard({ product }) {
  const { addToBasket } = useContext(BasketContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getAvailabilityMessage = () => {
    if (product.available) {
      return `In stock: ${product.itemsLeft} left`;
    } else {
      return `Out of stock. Restock expected on: ${product.restockDate}`;
    }
  };

  function handleAddToBasket(item) {
    addToBasket(item);
    onOpen();
  };

  return (
    <>
      <h1>
        {product.name} {product.available ? "" : <span>Pre Order</span>}
      </h1>
      <div>
        <h2>${product.price}</h2>
        <h1>Reviews: {product.numReviews}</h1>
        <h1>Rating: {product.rating} stars</h1>
        <button onClick={() => handleAddToBasket(product)}>Add to Basket</button>
        <BasketSummary isOpen={isOpen} onClose={onClose} />
      </div>
      <h2>{getAvailabilityMessage()}</h2>
      <AccordionInfo></AccordionInfo>
    </>
  );
}

export default ProductCard;