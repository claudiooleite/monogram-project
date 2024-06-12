import "./shop-product.css";


function ProductCard({ product }) {
  const getAvailabilityMessage = () => {
    if (product.available) {
      return `In stock: ${product.itemsLeft} left`;
    } else {
      return `Out of stock. Restock expected on: ${product.restockDate}`;
    }
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
      </div>
      <h2>{getAvailabilityMessage()}</h2>
    </>
  );
}

export default ProductCard;