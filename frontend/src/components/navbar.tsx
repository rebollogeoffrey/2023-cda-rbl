import { useState } from "react";
import "../styles/navbar.css";

function NavBar() {
  const [modalMenu, setModalMenu] = useState(false);
  const handleMenu = () => {
    setModalMenu(!modalMenu);
  };

  return (
    <>
      <button
        type="button"
        className={`button-burger ${modalMenu ? "change" : null}`}
        onClick={handleMenu}
      >
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </button>
      <div className={`left-menu ${modalMenu ? "left-menu-show" : null}`}></div>
    </>
  );
}

export default NavBar;
