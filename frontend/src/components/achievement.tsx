import "../styles/achievement.css";
import starEmpty from "../assets/images/star_empty.png";
import starFilled from "../assets/images/star_filled.png";

function Achievement() {
  const arrayTest = [
    { title: "Bravo", description: "TU as gagné", isOwned: true, game: "TGPQ" },
    {
      title: "Jouer",
      description: "Faire une partie",
      isOwned: false,
      game: "Lootery",
    },
    {
      title: "Bcp Jouer",
      description: "Quelle partie de jeu tu nous a proposé",
      isOwned: true,
      game: "Lootery",
    },
    {
      title: "SAH QUEL PLAISIR",
      description: "Tu régale comme jajaja",
      isOwned: false,
      game: "Lootery",
    },
    {
      title: "Et rebellote !!",
      description: "Tu remet le couvert mais quelles sont tes limites",
      isOwned: false,
      game: "Lootery",
    },
    {
      title: "Ordinateur",
      description: "Tu as réussi à allumer ton ordinateur",
      isOwned: true,
      game: "TGPQ",
    },
    {
      title: "Browser",
      description: "Tu as réussi à ouvrir ton navigateur",
      isOwned: true,
      game: "TGPQ",
    },
    {
      title: "Site",
      description: "Tu as réussi à accéder a ce site",
      isOwned: true,
      game: "TGPQ",
    },
    {
      title: "Connexion",
      description: "Tu as réussi à te connecter",
      isOwned: true,
      game: "TGPQ",
    },
    {
      title: "L'eau c'est sympa",
      description: "DAMN L'EAU !! TROP BON LA !",
      isOwned: true,
      game: "Patata",
    },
    {
      title: "En vrai le Coca",
      description: "Beh c'est de la merde faut le dire",
      isOwned: false,
      game: "Patata",
    },
    {
      title: "L'alcool ???",
      description:
        "Avec modération voyons (je l'ai jamais trouvé #TROPMARRANT)",
      isOwned: true,
      game: "Patata",
    },
    {
      title: "Aucune idée",
      description: "La j'avais pas d'idée",
      isOwned: true,
      game: "Mount",
    },
    {
      title: "Camion ?",
      description: "Allez dis le !! C'est giga drole tu vas voir !",
      isOwned: false,
      game: "Pouet",
    },
    {
      title: "Poeme ?",
      description: "Non tu t'es trompé, c'est pouet pas poète !",
      isOwned: true,
      game: "Pouet",
    },
  ];

  const gameUnique = [...new Set(arrayTest.map((data) => data.game))];

  console.log("gameUnique :>> ", gameUnique);
  return (
    <div className="ach">
      <h2>Achievements</h2>
      <div className="ach-container">
        {gameUnique.map((data) => {
          return (
            <div className="ach-game">
              <h3>{data}</h3>
              <ul className="ach-game-list">
                {arrayTest.map((ach) => {
                  if (data === ach.game) {
                    return (
                      <li className="ach-game-item">
                        <div>
                          <img
                            className="ach-game-item-img"
                            src={ach.isOwned ? starFilled : starEmpty}
                          />
                        </div>

                        <div className="ach-game-item-desc">
                          <h4>{ach.title}</h4>
                          <p>{ach.description}</p>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Achievement;
