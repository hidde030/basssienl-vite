import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { OverOns } from "./pages/OverOns";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Thanks from "./pages/Thanks";
import Info from "./pages/Info";
import Login from "./pages/Login";
import "./styles/style.scss";
import UserList from "./admin/UserList";
import Discord from "./pages/Discord";
import GiveAway from "./pages/GiveAway";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<OverOns />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/giveaway" element={<GiveAway />} />
        <Route path="/info" element={<Info />} />
        <Route path="/discord" element={<Discord />} />
        <Route path="/admin" element={<UserList />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
