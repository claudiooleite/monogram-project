import { useState } from "react";
import Card from "./Cards.jsx";
import "../assets/styles/products.css";

function Products() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    function handleHoverIn(index) {
        setHoveredIndex(index);
    }

    function handleHoverOut() {
        setHoveredIndex(null);
    }

    return (
        <Card
            handleHoverIn={handleHoverIn}
            handleHoverOut={handleHoverOut}
            hoveredIndex={hoveredIndex}
        />
    );
}

export default Products;
