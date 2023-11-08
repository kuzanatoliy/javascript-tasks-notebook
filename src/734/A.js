module.exports = {
  checkWinner: (playList) => {
    let ca = 0,
      cd = 0;
    for (let i = 0; i < playList.length; i++) {
      if (playList[i] === 'A') {
        ca++;
        continue;
      }
      cd++;
    }
    return cd === ca ? 'Friendship' : cd > ca ? 'Danik' : 'Anton';
  },
};
