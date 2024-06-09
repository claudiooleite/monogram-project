import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WrongWay from "./pages/WrongPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<WrongWay />} />
    </Routes>
  );
}

export default App;
