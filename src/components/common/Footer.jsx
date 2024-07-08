import "../../assets/styles/footer.css"
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="footer-bg">
        <footer>
            <div className="div-head-1">
                <h3>Harmony Hub</h3>
                <address>
                    Lorem ipsum dolor sit.
                    <br />
                    Aenean vulputate eleifend tellus.
                    <br />
                    Duis leo.
                </address>
            </div>
            <div className="div-head-2">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/howitworks">How it Works</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/download">Download</Link></li>
                </ul>
            </div>
            <div className="div-head-3">
                <h3>Help</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/howitworks">How it Works</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </div>
            <div className="div-head-4">
                <h3>Information</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/howitworks">How it Works</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/howitworks">How it Works</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </div>
            <div className="div-head-5">
                <h3>About us</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/howitworks">How it Works</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/howitworks">How it Works</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </div>
        </footer>
        </div>
    )
}

export default Footer;