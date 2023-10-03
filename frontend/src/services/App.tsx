import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

import NavBarContext from "../contexts/NavbarContext";

import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import StatisticPage from "../pages/statisticPage";
import AchievementPage from "../pages/achievementPage";
import AccountPage from "../pages/accountPage";

function App() {
  const [modalMenu, setModalMenu] = useState(false);

  {
    /* TODO : Decomment when token in enable */
  }

  // if (!token) {
  //   return <LoginPage />;
  // }

  return (
    <NavBarContext.Provider value={{ modalMenu, setModalMenu }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/hub" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/statistics" element={<StatisticPage />} />
        <Route path="/achievements" element={<AchievementPage />} />
        {/* TODO : add the correct route's element */}
        <Route path="/tgpq" element={<HomePage />} />
      </Routes>
      <Footer />
    </NavBarContext.Provider>
  );
}

export default App;
