import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Badge, IconButton } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import '../../assets/styles/nav.css';
import BasketContext from "../../hooks/basketContext";
import Image1 from "../../assets/images/logo2.png";
import HamburgerMenu from "./HamburgerMenu";

const Nav = ({ onOpen, productsRef }) => {
  const { basket } = useContext(BasketContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleShopClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToProducts: true } });
    }
  };

  return (
    <div className="nav-position-fixed">
      <nav className="nav-parent">
        <Link className="nav-logo" to="/">
          <img src={Image1} alt="Music Store Logo" />
          <h1>Music Store</h1>
        </Link>
        <ul className="nav-links">
          <li><a href="/shop" onClick={handleShopClick}>Shop</a></li>
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
        </ul>
        <HamburgerMenu />
      </nav>
    </div>
  );
};

export default Nav;
