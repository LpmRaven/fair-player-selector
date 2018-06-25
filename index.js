module.exports.init = function () {
  // No. Players
  const numberOfPlayers = 16;

  //  Players - no. consecutive games
  const playersConsecutiveGames = {
    "Raven": 2,
    "Chris": 1,
    "Mark W": 2,
    "Luca": 1,
    "Josh": 2,
    "Mike B": 2,
    "Mike Peters": 2,
    "Junaid": 2,
    "Tarff": 2,
    "Paul Jones": 2,
    "Riz": 1,
    "Ste F": 1,
    "Joe Burn": 2,
    "Ben": 1,
    "Rob": 2,
    "Al": 1,
    "Pete": 2,
    "Tom Box": 2
  }

  const playerNames = Object.keys(playersConsecutiveGames);
  let listOfPlayers = [];
  const playersPlaying = [];

  playerNames.map((playerName) => {
    const weighting = playersConsecutiveGames[playerName];

    for (let i = 0; i < weighting; i++) {
      listOfPlayers.push(playerName);
    }
  });

  console.log("Weighted list Of Players: ", listOfPlayers);

  for (let i = 0; i < numberOfPlayers; i++) {
      const selectedPlayer = listOfPlayers[Math.floor(Math.random()*listOfPlayers.length)];

      playersPlaying.push(selectedPlayer);
      listOfPlayers = listOfPlayers.filter(player => player !== selectedPlayer);
  };

  console.log("Players playing: ", playersPlaying);
};
