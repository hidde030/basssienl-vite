import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { OverOns } from "./pages/OverOns";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Thanks from "./pages/Thanks";
import Admin from "./admin/Admin";
import Info from "./pages/Info";
import "./styles/style.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/overons" element={<OverOns />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/info" element={<Info />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<h1>404: Not Found</h1>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
