import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { OverOns } from "./pages/OverOns";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Thanks from "./pages/Thanks";
import Info from "./pages/Info";
import "./styles/style.scss";
import UserList from "./admin/UserList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/overons" element={<OverOns />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/info" element={<Info />} />
        <Route path="/admin" element={<UserList />} />

        <Route path="*" element={<h1>404: Not Found</h1>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
