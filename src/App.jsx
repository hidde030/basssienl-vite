import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { OverOns } from "./pages/OverOns";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Thanks from "./pages/Thanks";
import "./styles/style.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/overons" element={<OverOns />} />
        <Route path="/thanks" element={<Thanks />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
