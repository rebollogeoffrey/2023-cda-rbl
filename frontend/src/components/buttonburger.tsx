import { useContext } from "react";
import "../styles/buttonburger.css";
import sword from "../assets/images/sword_burgermenu.png";
import sword2 from "../assets/images/sword2_burgermenu.png";
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
        <img src={sword} alt="Menu's sword" className="bar1" />
        <img src={sword2} alt="Menu's sword" className="bar2" />
        <img src={sword} alt="Menu's sword" className="bar3" />
      </button>
  );
}

export default ButtonBurger;
