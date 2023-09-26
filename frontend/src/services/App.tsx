import "../styles/App.css";
import Footer from "../components/footer";
import LoginPage from "../pages/loginPage";
import { Routes, Route } from "react-router-dom";
import ModifyPage from "../pages/modifyPage";

function App() {
  return (
    <>
      <Footer />
      {/* Replace Top Footer with the navbar */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<LoginPage />} />
        <Route path="/account" element={<ModifyPage />} />
        <Route path="/tgpq" element={<ModifyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
