import { useContext } from "react";
import "../styles/buttonburger.css";
import NavBarContext from "../contexts/NavbarContext";

function ButtonBurger() {
  const { modalMenu, setModalMenu } = useContext(NavBarContext);
  const handleMenu = () => {
    setModalMenu(!modalMenu);
    console.log("modalMenu :>> ", modalMenu);
  };

  return (
    <button
      type="button"
      className={`button-burger ${modalMenu ? "change" : null}`}
      onClick={handleMenu}
    >
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </button>
  );
}

export default ButtonBurger;
