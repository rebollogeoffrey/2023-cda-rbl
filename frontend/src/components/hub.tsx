import "../styles/hub.css";
import rblLogo from "../assets/images/logo_RBL.png";

function Hub() {
  const arrayTest = [
    { imageGame: rblLogo, descriptionGame: "lorem" },
    {
      imageGame: rblLogo,
      descriptionGame:
        "loressssssssssssssssss sssssssssssss ssssss ssss ssssssssssssssss ssssssssssss ssssssss ssssssssssssssssssss ssssss ssssssssss sssss ssss sssss sss sss sssm",
    },
    { imageGame: rblLogo, descriptionGame: "lorem" },
    { imageGame: rblLogo, descriptionGame: "lorem" },
    { imageGame: rblLogo, descriptionGame: "lorem" },
    { imageGame: rblLogo, descriptionGame: "lorem" },
    { imageGame: rblLogo, descriptionGame: "lorem" },
    { imageGame: rblLogo, descriptionGame: "lorem" },
    { imageGame: rblLogo, descriptionGame: "lorem" },
  ];

  return (
    <div className="hub">
      <h2>Choose Your Game</h2>
      <div className="hub-container">
        {arrayTest.map((game) => {
          return (
            <div className="hub-game">
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
