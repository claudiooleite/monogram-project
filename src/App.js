import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WrongWay from "./pages/WrongPage";
import ShopProduct from "./pages/Shop-Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productName" element={<ShopProduct />} />
      <Route path="*" element={<WrongWay />} />
    </Routes>
  );
}

export default App;
