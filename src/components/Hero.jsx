
import image from "../assets/images/headphones-3085681_1280.jpg"
import "../assets/styles/hero.css"


function Hero() {
    
    return (
        <div className="hero-image-container" style={{
            backgroundImage: `url(${image})`
        }}>
            <div className="hero-content">
                <h1>A Instrument for Every Musician</h1>
                <p>Discover the perfect instrument for you.</p>

            </div>
        </div>
    )
}

export default Hero;