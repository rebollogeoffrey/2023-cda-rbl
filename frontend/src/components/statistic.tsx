import "../styles/statistic.css";

function Statistic() {
  // const globalStat = [
  //   { nbWin: 2, nbLose: 1, game: "TGPQ" },
  //   { nbWin: 2, nbLose: 1, game: "Lootery" },
  //   { nbWin: 2, nbLose: 1, game: "Patata" },
  //   { nbWin: 2, nbLose: 1, game: "Mount" },
  //   { nbWin: 2, nbLose: 1, game: "Pouet" },
  // ];

  // const specificStat = [
  //   { nb_killed: 2, name: "WOLF", game: "TGPQ" },
  //   { nb_killed: 2, name: "GOLEM", game: "TGPQ" },
  // ];

  const userStats = [
    {
      game: "TGPQ",
      nbWin: 2,
      nbLose: 1,
      gameStats: [
        { name: "Wolf", value: 25 },
        { name: "Golem", value: 8 },
        { name: "Blob", value: 11 },
        { name: "Revengeful Ex-Partner", value: 6 },
      ],
    },
    {
      game: "Lootery",
      nbWin: 1,
      nbLose: 0,
      gameStats: [
        { name: "Roll", value: 658 },
        { name: "Gold", value: 548211 },
      ],
    },
    {
      game: "Pouet",
      nbWin: 22,
      nbLose: 9,
      gameStats: [
        { name: "Camion", value: 22222 },
        { name: "Poeme", value: 62 },
      ],
    },
    {
      game: "Patata",
      nbWin: 1,
      nbLose: 999,
      gameStats: [
        { name: "Water", value: 9999999999 },
        { name: "Coke", value: 3 },
        { name: "Alcohol", value: 68852 },
      ],
    },
    {
      game: "Mount",
      nbWin: 1,
      nbLose: 1,
      gameStats: [],
    },
  ];

  return (
    <div className="stat">
      <h1>Statistics</h1>
      <div className="stat-container">
        {userStats.map((data) => {
          return (
            <div className={`stat-game border-${data.game}`}>
              <h2>{data.game}</h2>
              <ul>
                <li className="stat-game-item">
                  {" "}
                  PLAYED : {data.nbWin + data.nbLose}
                </li>
                <li className="stat-game-item"> WIN : {data.nbWin}</li>
                <li className="stat-game-item"> LOSE : {data.nbLose}</li>
                {data.gameStats.map((stat) => {
                  if (data.game === "TGPQ") {
                    return (
                      <li className="stat-game-item">
                        {stat.name} KILLED : {stat.value}
                      </li>
                    );
                  } else {
                    return (
                      <li className="stat-game-item">
                        {stat.name} : {stat.value}
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
export default Statistic;
