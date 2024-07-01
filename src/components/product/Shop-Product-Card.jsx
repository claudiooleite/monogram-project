import { useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import BasketContext from "../../hooks/basketContext";
import BasketSummary from "./PreviewBasket";
import AccordionInfo from "./AccordionInfo";
import "./shop-product.css";

const stars = {
  1: "★☆☆☆☆",
  2: "★★☆☆☆",
  3: "★★★☆☆",
  4: "★★★★☆",
  5: "★★★★★",
};

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
      <h1 className="header-product">
        {product.name} {product.available ? "" : <span style={{ background: '#ff8d6b' }}> Pre Order </span>}
      </h1>
      <div>
        <div className="price-rating">
          <h2>${product.price}</h2>
          <h1>{product.rating}  {stars[Math.round(product.rating)]}</h1>
        </div>
        <button className="button" onClick={() => handleAddToBasket(product)}>{product.available ? "Add to Basket" : "Pre Order"}</button>
    
        <BasketSummary isOpen={isOpen} onClose={onClose} />
      </div>
      <h2>{getAvailabilityMessage()}</h2>
      <AccordionInfo></AccordionInfo>
    </>
  );
}

export default ProductCard;