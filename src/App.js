import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import WrongWay from "./pages/WrongPage";
import ShopProduct from "./pages/Shop-Product";
// import CheckOut from "./pages/CheckOut";

const CheckOut = lazy(() => import("./pages/CheckOut"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productName" element={<ShopProduct />} />
        <Route
          path="/checkout"
          element={
            <Suspense fallback={<h1>loading</h1>}>
              <CheckOut />
            </Suspense>
          }
        />
        <Route path="*" element={<WrongWay />} />
      </Routes>
    </>
  );
}

export default App;
