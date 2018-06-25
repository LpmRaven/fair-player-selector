const chalk = require('chalk');

module.exports = (playerName, weighting) => {
  console.log(chalk.whiteBright(
    '\n' +
    '--------------------------------------------------- \n' +
    'Weighted list Of Players: (for transparency) - Consecutive Games  \n' +
    '---------------------------------------------------'
  ));
};
