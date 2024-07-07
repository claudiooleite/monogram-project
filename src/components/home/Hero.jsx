
import image from "../../assets/images/headphones-3085681_1280.jpg"
import "./hero.css"
import { IconButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


function Hero({ productsRef }) {
    function handleIconClick(e) {
        e.preventDefault();
        productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="hero-image-container" style={{
            backgroundImage: `url(${image})`
        }}>
            <div className="hero-content">
                <h1>An Instrument for Every Musician</h1>
                <p>Discover the perfect instrument for you.</p>
            </div>
            <IconButton bg={''} onClick={handleIconClick} icon={<ChevronDownIcon  color={'rgb(239, 194, 179)'} boxSize={16} />} />
        </div>
    )
}

export default Hero;