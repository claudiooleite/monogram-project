import { musicItems } from "../data/musicItems";
import "../assets/styles/products.css";




function Card({
    handleHoverIn,
    handleHoverOut,
    hoveredIndex }) {
    return (
        <section className="section-grid">
            {musicItems.slice(0, 5).map((item, index) => (
                <div
                    key={item.name}
                    className={`card ${item.name}`}
                >
                    <article>
                        <header
                            className={`article img-bg ${item.name}`}
                            onMouseEnter={() => handleHoverIn(index)}
                            onMouseLeave={handleHoverOut}
                        >
                            <img
                                src={hoveredIndex === index ? item.images[1] : item.images[0]}
                                alt={item.alt}
                                className="card-image"
                            />
                            <p className="pre-order-badge">Pre-order</p>
                        </header>
                        <div className="card-content">
                            <div className="card-header-price">
                                <h3>{item.name}</h3>
                                <p className="card-price">${item.price}</p>
                            </div>
                            <p className="card-content-description">{item.description}</p>
                        </div>
                    </article>
                </div>
            ))}

        </section>
    )
}

export default Card;