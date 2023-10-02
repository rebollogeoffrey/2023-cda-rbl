import { useContext } from "react";
import "../styles/menu.css";
import Logo from "./logo";
import NavBarContext from "../contexts/NavbarContext";

function Menu() {
  const { modalMenu } = useContext(NavBarContext);

  return (
    <div className={`menu ${modalMenu ? "menu-show" : null}`}>
      <div className="menu-container">
        <Logo />
        <div className="menu-items">
          <h2>
            <a>Statistics</a>
          </h2>
          <h2>
            <a>Achievements</a>
          </h2>
          <h2>
            <a>Account</a>
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
