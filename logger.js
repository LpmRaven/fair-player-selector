const chalk = require('chalk');

module.exports.playerWeightTitle = (playerName, weighting) => {
  console.log(chalk.whiteBright(
    '\n' +
    '--------------------------------------------------- \n' +
    'Weighted list Of Players: (for transparency) - Consecutive Games  \n' +
    '---------------------------------------------------'
  ));
};

module.exports.playerWeight = (playerName, weighting) => {
  console.log(chalk.whiteBright(
    chalk.green(playerName, ": " + weighting + ', ')
  ));
};

module.exports.lineBreak = () => {
  console.log(chalk.whiteBright(
    '---------------------------------------------------'
  ));
};

module.exports.players = (playersPlaying, benchPlayers) => {

  console.log(chalk.whiteBright(
    'Players playing:  \n' +
    '--------------------------------------------------- \n' +
    chalk.yellowBright(playersPlaying, '\n') +
    '---------------------------------------------------'

  ));
  console.log(chalk.whiteBright(
    'Players on the bench:  \n' +
    '--------------------------------------------------- \n' +
    benchPlayers.map((player) => chalk.red(player)) + '\n' +

    '---------------------------------------------------' +
    '\n' +
    '\n'
  ));
};
