import React from "react";
import PropTypes from "prop-types";
import AccordionInfo from "./AccordionInfo";
import "./shop-product.css";

const stars = {
  1: "★☆☆☆☆",
  2: "★★☆☆☆",
  3: "★★★☆☆",
  4: "★★★★☆",
  5: "★★★★★",
};

function ProductCard({ product, handleAddToBasket }) {
  const getAvailabilityMessage = () => {
    if (product.available) {
      return `In stock: ${product.itemsLeft} left`;
    } else {
      return `Out of stock. Restock expected on: ${product.restockDate}`;
    }
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
        <button className="button" onClick={() => handleAddToBasket(product)}>
          {product.available ? "Add to Basket" : "Pre Order"}
        </button>
      </div>
      <h2>{getAvailabilityMessage()}</h2>
      <AccordionInfo />
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
    itemsLeft: PropTypes.number,
    restockDate: PropTypes.string,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleAddToBasket: PropTypes.func.isRequired,
};

export default ProductCard;
