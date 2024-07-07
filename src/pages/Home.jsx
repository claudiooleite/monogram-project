import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";

function Home() {
    const productsRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToProducts) {
            productsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <Nav productsRef={productsRef} />
            <Hero productsRef={productsRef} />
            <div className="parent-products" ref={productsRef}>
                <Products/>
            </div>
            <Footer />
        </>
    );
}

export default Home;
