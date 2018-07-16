
const getAvailablePlayers = (playersConsecutiveGames) => {
  const playerNames = Object.keys(playersConsecutiveGames);

  return playerNames.filter(name => playersConsecutiveGames[name] !== 0);
};

module.exports.getAvailablePlayersConsecutiveGames = (playersConsecutiveGames) => {
  const availablePlayers = getAvailablePlayers(playersConsecutiveGames);

  return availablePlayers;
};
