import "../styles/hub.css";
import rblLogo from "../assets/images/logo_RBL.png";

function Hub() {
  const arrayTest = [
    { imageGame: rblLogo, nameGame: "TGPQ", descriptionGame: "lorem" },
    {
      imageGame: rblLogo,
      nameGame: "Pouet",
      descriptionGame:
        "loressssssssssssssssss sssssssssssss ssssss ssss ssssssssssssssss ssssssssssss ssssssss ssssssssssssssssssss ssssss ssssssssss sssss ssss sssss sss sss sssm",
    },
    { imageGame: rblLogo, nameGame: "Lootery", descriptionGame: "lorem" },
    { imageGame: rblLogo, nameGame: "Mount", descriptionGame: "lorem" },
    { imageGame: rblLogo, nameGame: "Patata", descriptionGame: "lorem" },
  ];

  return (
    <div className="hub">
      <h1>Choose Your Game</h1>
      <div className="hub-container">
        {arrayTest.map((game) => {
          return (
            <div className={`hub-game ${game.nameGame}`}>
              <img src={game.imageGame} className="hub-game-img" />
              <p className="hub-game-desc"> {game.descriptionGame}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hub;
