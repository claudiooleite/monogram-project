import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Badge, IconButton } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi"; // Import shopping cart icon
import '../../assets/styles/nav.css';
import BasketContext from "../../hooks/basketContext";
import Image1 from "../../assets/images/logo2.png";

const Nav = ({ onOpen }) => {
  const { basket } = useContext(BasketContext);

  return (
    <div className="nav-position-fixed">
      <nav className="nav-parent">
        <Link className="nav-logo" to="/">
          <img src={Image1} alt="Music Store Logo" />
          <h1>Music Store</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/howitworks">How It Works</Link></li>
          <li><Link to="/workflow">Workflows</Link></li>
          <li><Link to="/download">Download</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li className="basket-container">
            <IconButton
              icon={<FiShoppingBag />}
              aria-label="Basket"
              onClick={onOpen}
              className="basket-button"
            />
            {basket.length > 0 && (
              <Badge
                colorScheme="red"
                borderRadius="full"
                className="basket-badge"
              >
                {basket.length}
              </Badge>
            )}
          </li>
          <li><Link to="/cleng">Leng</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
