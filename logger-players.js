const chalk = require('chalk');

module.exports = (playersPlaying, benchPlayers) => {

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
