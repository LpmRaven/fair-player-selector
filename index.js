// Data
const playersStats = require('./player-stats.json');
const playersConsecutiveGames = require('./player-consecutive-games.json');

// Logger
const loggerPlayers = require('./helpers/logger').players;
const loggerLineBreak = require('./helpers/logger').lineBreak;
const loggerPlayerWeight = require('./helpers/logger').playerWeight;
const loggerPlayerWeightTitle = require('./helpers/logger').playerWeightTitle;

// Helpers
const getPlayerDetails = require('./helpers/get-player-details').getPlayerDetails;
const getPlayersPlaying = require('./helpers/get-players-playing').getPlayersPlaying;
const getPlayersBenching = require('./helpers/get-players-benching').getPlayersBenching;
const getAvailablePlayersConsecutiveGames = require('./helpers/get-available-players').getAvailablePlayersConsecutiveGames;

module.exports.init = () => {
  const numberOfPlayers = 16;
  const playerNames = Object.keys(playersConsecutiveGames);
  const availablePlayersConsecutiveGames = getAvailablePlayersConsecutiveGames(playersConsecutiveGames);

  loggerPlayerWeightTitle();

  const listOfPlayers = getPlayerDetails(playerNames, availablePlayersConsecutiveGames);

  loggerLineBreak();

  const playersPlaying = getPlayersPlaying(numberOfPlayers, listOfPlayers);
  const benchPlayers = getPlayersBenching(playerNames, playersPlaying);

  loggerPlayers(playersPlaying, benchPlayers);

};
