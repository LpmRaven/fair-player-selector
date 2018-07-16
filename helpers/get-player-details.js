const loggerPlayerWeight = require('./logger').playerWeight;
const playersStats = require('../player-stats.json');

const getStats = (playerStats, playerName) => {
  const matchDates = Object.keys(playerStats);

  // matchDates.map((matchDate) => {
  //   return
  // });

  return {
    playedTotal: 1,
    winTotal: 1,
    loseTotal: 1,
    form: 1
  }
};

module.exports.getPlayerDetails = (playerNames, playersConsecutiveGames) => {
  let listOfPlayers = [];

  playerNames.map((playerName) => {
    const weighting = playersConsecutiveGames[playerName];
    const playerRawStats = playersStats[playerName];
    const playerStats = getStats(playerRawStats);

    for (let i = 0; i < weighting; i++) {
      listOfPlayers.push(playerName);
    }

    loggerPlayerWeight(playerName, weighting, playerStats.playedTotal, playerStats.winTotal, playerStats.loseTotal, playerStats.form);
  });

  return listOfPlayers;
}
