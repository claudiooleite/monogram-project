import { musicItems } from "../data/musicItems.js"
import "../assets/styles/products.css"

function Products() {
    return (
        <section className="section-grid">
            {musicItems.slice(0, 8).map((item) => {
                return (
                    <div className="card" >
                        <article key={item.name}>
                            <header >
                                <img src={item.images[0]} alt={item.alt} className="card-image" />
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
                )
            })}

        </section>
    )
}

export default Products

