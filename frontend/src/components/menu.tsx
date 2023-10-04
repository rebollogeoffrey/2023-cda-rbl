import { useContext } from "react";
import "../styles/menu.css";
import Logo from "./logo";
import NavBarContext from "../contexts/NavbarContext";
import { Link } from "react-router-dom";

function Menu() {
  const { modalMenu } = useContext(NavBarContext);

  return (
    <div className={`menu ${modalMenu ? "menu-show" : null}`}>
      <div className="menu-container">
        <Logo />
        <div className="menu-items">
          {/* TODO : Add the link for the route */}
          <Link to="/statistics" className="statistics">
            <h3>Statistics</h3>
          </Link>
          <Link to="/achievements" className="achievements">
            <h3>Achievements</h3>
          </Link>
          <Link to="/account" className="account">
            <h3>Account</h3>
          </Link>
        </div>
        <div className="logout">
          <Link to="/">
            <h3>Log Out</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
