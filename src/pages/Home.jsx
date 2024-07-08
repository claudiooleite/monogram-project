import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import BasketSummary from "../components/product/PreviewBasket";

function Home() {
    const productsRef = useRef(null);
    const location = useLocation();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (location.state?.scrollToProducts) {
            productsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <Nav productsRef={productsRef} onOpen={onOpen} />
            <Hero productsRef={productsRef} />
            <div className="parent-products" ref={productsRef} aria-labelledby="products-heading">
                <Products />
            </div>
            <BasketSummary isOpen={isOpen} onClose={onClose} aria-live="polite" />
            <Footer />
        </>
    );
}

export default Home;
