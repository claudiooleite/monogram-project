import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WrongWay from "./pages/WrongPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<WrongWay />} />
      </Route>
    </Routes>
  );
}

export default App;
