import { Link } from "react-router-dom";

function Card({ item, index, handleHoverIn, handleHoverOut, hoveredIndex }) {
    return (
        <div className={`card ${item.name}`}>
            <Link to={`/product/${item.name}`}>
                <article className={`article-card ${item.name}`} >
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
            </Link>
        </div>
    );
}

export default Card;