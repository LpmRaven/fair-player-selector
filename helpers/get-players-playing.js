
module.exports.getPlayersPlaying = (numberOfPlayers, listOfPlayers) => {
  const playersPlaying = [];

  for (let i = 0; i < numberOfPlayers; i++) {
    const selectedPlayer = listOfPlayers[Math.floor(Math.random() * listOfPlayers.length)];

    playersPlaying.push(selectedPlayer);
    listOfPlayers = listOfPlayers.filter(player => player !== selectedPlayer);
  };

  return playersPlaying;
};
