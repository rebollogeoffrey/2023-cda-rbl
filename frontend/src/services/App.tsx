import "../styles/App.css";
import Footer from "../components/footer";
import LoginPage from "../pages/loginPage";
import { Routes, Route } from "react-router-dom";
import ModifyPage from "../pages/modifyPage";
import NavBar from "../components/navbar";
import NavBarContext from "../contexts/NavbarContext";
import { useState } from "react";

function App() {
  const [modalMenu, setModalMenu] = useState(false);

  return (
    <NavBarContext.Provider value={{ modalMenu, setModalMenu }}>
      <NavBar />
      {/* Replace Top Footer with the navbar */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<LoginPage />} />
        <Route path="/account" element={<ModifyPage />} />
        <Route path="/tgpq" element={<ModifyPage />} />
      </Routes>
      <Footer />
    </NavBarContext.Provider>
  );
}

export default App;
