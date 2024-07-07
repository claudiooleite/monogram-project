import { useState } from "react";
import Cards from "./Cards"
import { musicItems } from "../../data/musicItems";
import "./products.css";

function Products() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    function handleHoverIn(index) {
        setHoveredIndex(index);
    }

    function handleHoverOut() {
        setHoveredIndex(null);
    }

    return (
        <>
            <section className="section-grid one">
                {musicItems.slice(0, 4).map((item, index) => (
                    <Cards
                        key={item.name}
                        item={item}
                        index={index}
                        handleHoverIn={handleHoverIn}
                        handleHoverOut={handleHoverOut}
                        hoveredIndex={hoveredIndex}
                    />
                ))}
            </section>
            <section className="section-two">
                <Cards
                    item={musicItems[4]}
                    index={4}
                    handleHoverIn={handleHoverIn}
                    handleHoverOut={handleHoverOut}
                    hoveredIndex={hoveredIndex}
                />
            </section>
        </>
    );
}

export default Products;
