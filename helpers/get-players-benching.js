module.exports.getPlayersBenching = (playerNames, playersPlaying) => {
  return playerNames.filter(player => playersPlaying.indexOf(player) === -1);
}
