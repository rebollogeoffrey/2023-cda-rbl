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
          <h2>
            <Link to="/statistics">Statistics</Link>
          </h2>
          <h2>
            <Link to="/achievements">Achievements</Link>
          </h2>
          <h2>
            <Link to="/account">Account</Link>
          </h2>
        </div>
        <div className="logout">
          <h2>
            <a>Log Out</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Menu;
