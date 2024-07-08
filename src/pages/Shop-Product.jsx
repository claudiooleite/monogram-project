import { useParams } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import BasketSummary from "../components/product/PreviewBasket";
import ProductCard from "../components/product/Shop-Product-Card";
import "../components/product/shop-product.css";
import { musicItems } from "../data/musicItems";
import BasketContext from "../hooks/basketContext";
import Card from "../components/home/Cards";
import "../components/home/products.css";
import ReviewCard from "../components/product/ReviewsCard";
import { customersSay } from "../data/reviews";

function ShopProduct() {
    const { productName } = useParams();
    const product = musicItems.find(item => item.name === productName);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { addToBasket } = useContext(BasketContext);

    function handleHoverIn(index) {
        setHoveredIndex(index);
    }

    function handleHoverOut() {
        setHoveredIndex(null);
    }

    const handleAddToBasket = (item) => {
        addToBasket(item);
        onOpen();
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="parent-container">
            <Nav onOpen={onOpen} />
            <div className="main-content">
                <div className="cssportal-grid">
                    <div className="div1 gridImagesMain">
                        <h1 className="product-header-small-screen">
                            {product.name} {product.available ? "" : <span style={{ background: '#ff8d6b' }}> Pre Order </span>}
                        </h1>
                        <div className="carousel-container">
                            
                            <div className="carousel-arrow left-arrow" onClick={handlePreviousImage}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            <div className="gridImages1">
                                <img src={product.images[currentImageIndex]} alt="" className="carousel-image" />
                            </div>
                            <div className="carousel-arrow right-arrow" onClick={handleNextImage}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                    </div>
                    <div className="div2 flex-container">
                        <div className="flex-items">
                            <ProductCard product={product} handleAddToBasket={handleAddToBasket} />
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
            </div>
            <BasketSummary isOpen={isOpen} onClose={onClose} />

            <Footer />
        </div>
    );
}

export default ShopProduct;
