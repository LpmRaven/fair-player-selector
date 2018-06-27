const playersStats = require('./player-stats.json');
const playersConsecutiveGames = require('./player-consecutive-games.json');
const loggerPlayers = require('./logger').players;
const loggerLineBreak = require('./logger').lineBreak;
const loggerPlayerWeight = require('./logger').playerWeight;
const loggerPlayerWeightTitle = require('./logger').playerWeightTitle;

module.exports.init = () => {
  const numberOfPlayers = 16;
  const playerNames = Object.keys(playersConsecutiveGames);
  let listOfPlayers = [];
  const playersPlaying = [];

  loggerPlayerWeightTitle();

  playerNames.map((playerName) => {
    const weighting = playersConsecutiveGames[playerName];

    for (let i = 0; i < weighting; i++) {
      listOfPlayers.push(playerName);
    }
    loggerPlayerWeight(playerName, weighting);
  });

  loggerLineBreak();

  for (let i = 0; i < numberOfPlayers; i++) {
    const selectedPlayer = listOfPlayers[Math.floor(Math.random() * listOfPlayers.length)];

    playersPlaying.push(selectedPlayer);
    listOfPlayers = listOfPlayers.filter(player => player !== selectedPlayer);
  };

  const benchPlayers = playerNames.filter(player => playersPlaying.indexOf(player) === -1);
  loggerPlayers(playersPlaying, benchPlayers);

};
