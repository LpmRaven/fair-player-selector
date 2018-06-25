const chalk = require('chalk');

module.exports = (playerName, weighting) => {
  console.log(chalk.whiteBright(
    chalk.green(playerName, ": " + weighting + ', ')
  ));
};
