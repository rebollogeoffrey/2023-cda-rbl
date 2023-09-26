import "../styles/App.css";
import Footer from "../components/footer";
import LoginPage from "../pages/loginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
