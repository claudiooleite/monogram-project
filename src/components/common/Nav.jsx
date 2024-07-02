import { useContext } from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/nav.css';
import BasketContext from "../../hooks/basketContext";

const Nav = ({ onOpen }) => {
  const { basket } = useContext(BasketContext);
  return (
    <div className="nav-position-fixed">
      <nav className="nav-parent">
        <Link className="nav-logo" to="/">Home</Link>
        <ul className="nav-links">
          <Link to="/howitworks">How It works</Link>
          <Link to="/workflow">Workflows</Link>
          <Link to="/download">Download</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/support">Support</Link>
          <Link to="/shop">Shop</Link>
          <button onClick={onOpen} className="basket-button">
            Basket: {basket.length}
          </button>
          <Link to="/cleng">Leng</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;