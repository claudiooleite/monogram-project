import { useParams } from "react-router-dom";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import ProductCard from "../components/product/Shop-Product-Card";
import "../components/product/shop-product.css"
import { musicItems } from "../data/musicItems";
import { useState } from "react";
import Card from "../components/home/Cards";
import "../components/home/products.css";
import ReviewCard from "../components/product/ReviewsCard";
import { customersSay } from "../data/reviews";

function ShopProduct() {
    const { productName } = useParams();
    const product = musicItems.find(item => item.name === productName);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    function handleHoverIn(index) {
        setHoveredIndex(index);
    }

    function handleHoverOut() {
        setHoveredIndex(null);
    }
    if (!product) {
        return <p>Product not found</p>;
      }
    return (
        <div className="parent-container">
            <Nav />
            <div className="cssportal-grid">
                <div className="div1 gridImagesMain">
                    <div className="gridImages1"><img src={product.images[0]} alt="" /></div>
                    <div className="gridImages2"><img src={product.images[1]} alt="" /></div>
                    <div className="gridImages3"><img src={product.images[1]} alt="" /></div>
                </div>
                <div className="div2 flex-container">
                    <div className="flex-items">
                        <ProductCard product={product} />
                    </div>
                    <div className="flex-items"></div>
                </div>
                <div className="div3">
                    <h2>MULTI-INSTRUMENT CONFIGURATOR APP</h2>
                    <p>Included with every purchase is the Multi-Instrument Configurator app, a versatile and user-friendly application for macOS and Windows designed to optimize your musical instruments for any playing style, with no coding or scripting needed.</p>
                    <ul>
                        <li><strong>Customize Play Sensitivity and Range</strong>: Adjust the sensitivity and range of each instrument to achieve the perfect sound and feel.</li>
                        <li><strong>Personalize LED Colors</strong>: Set and change the LED colors for any instrument control, enhancing your performance visually.</li>
                        <li><strong>Advanced Control Gestures</strong>: Utilize advanced gestures for every input, including key press, key press & hold, and dynamic tilt mode.</li>
                        <li><strong>Standard Input Device Mode</strong>: Map your instruments to standard input devices, such as keyboard shortcuts, macros, joystick, and mouse actions.</li>
                        <li><strong>Digital Labeling and On-Screen Previews</strong>: Digitally label your instrument modules and bring up an on-screen preview to keep track of your settings effortlessly.</li>
                        <li><strong>Expand Your Creativity</strong>: Unlock new possibilities with specialized packs for Audio, Photo, and Video editing, providing your instruments with hundreds of additional functions and profiles.</li>
                    </ul>

                </div>
                <div className="div4">
                    <div className="calltoaction">
                        <div className="child-calltoaction">
                            <h2>Everyday Essentials</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="div5">
                    <h1>Also Recommended</h1>
                    <div className="small-card-products">
                        {musicItems.slice(0, 2).map((item, index) => (
                            <Card
                                key={item.name}
                                item={item}
                                index={index}
                                handleHoverIn={handleHoverIn}
                                handleHoverOut={handleHoverOut}
                                hoveredIndex={hoveredIndex} />
                        ))}
                    </div>
                </div>
                <div className="div6">
                    <div className="reviews-container">
                        {customersSay.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ShopProduct;