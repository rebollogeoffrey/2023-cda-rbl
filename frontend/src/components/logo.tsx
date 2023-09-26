import rblLogo from "../assets/images/logo_RBL.png";
import "../styles/logo.css";

function Logo() {
  return (
    <div className="logo-constructor">
      <img src={rblLogo} />
      <div className="logo-constructor-text">
        <span>Roll</span>
        <span>Battle</span>
        <span>Loot</span>
      </div>
    </div>
  );
}
export default Logo;
