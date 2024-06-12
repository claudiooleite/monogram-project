import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductCard from "../components/Shop-Product-Card";
import "../assets/styles/shop-product.css"
import { musicItems } from "../data/musicItems";

function ShopProduct() {
    const { productId } = useParams();
    const product = musicItems[productId];
    return (
        <>
            <Nav />
            <div className="cssportal-grid">
                <div className="div1">
                    div 1
                </div>
                <div className="div2 flex-container">
                    <div class="flex-items">
                        <ProductCard product={product} />
                    </div>
                    <div class="flex-items"></div>
                </div>
                <div className="div3">div3</div>
                <div className="div4">div4</div>
                <div className="div5">div5</div>
                <div className="div6">div6</div>
                <div className="div7">div7</div>
            </div>
            <Footer />
        </>
    )
}

export default ShopProduct;