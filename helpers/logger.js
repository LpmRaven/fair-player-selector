const chalk = require('chalk');

module.exports.playerWeightTitle = (playerName, weighting) => {
  const playerNameField = ("                Player Name |").slice(-17);
  const weightField = (" Con |").slice(-6);
  const playedField = (" Pla |").slice(-6);
  const winField = (" Win |").slice(-6);
  const lossField = (" Los |").slice(-6);
  const formField = (" Form |").slice(-7);
  //const WeightField = (" Consecutive |").slice(-13);
  console.log(chalk.whiteBright(
    '\n' +
    '--------------------------------------------------- \n' +
    'Player details  \n' +
    '--------------------------------------------------- \n' +
    playerNameField + weightField + playedField + winField + lossField + formField
  ));
};

module.exports.playerWeight = (playerName, weighting, playedTotal, winTotal, loseTotal, form) => {
  const playerNameValue = ("                    " + playerName).slice(-15);
  const weightingValue = ("                    " + weighting).slice(-3);
  const playedValue = ("                    " + playedTotal).slice(-3);
  const winValue = ("                    " + winTotal).slice(-3);
  const loseValue = ("                    " + loseTotal).slice(-3);
  const formValue = ("                    " + form).slice(-3);
  console.log(chalk.whiteBright(
    chalk.green(playerNameValue, "| " + weightingValue + " | " + playedValue + " | " + winValue + " | " + loseValue + " | " + formValue + " |")
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
