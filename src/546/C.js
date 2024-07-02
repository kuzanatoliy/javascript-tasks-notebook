module.exports = {
  getBattleData: (player1, player2) => {
    for (let j = 0; j <= 100000; j++) {
      if (!player1[j]) {
        return [j, 2];
      }
      if (!player2[j]) {
        return [j, 1];
      }
      if (player1[j] > player2[j]) {
        player1.push(player2[j]);
        player1.push(player1[j]);
      } else {
        player2.push(player1[j]);
        player2.push(player2[j]);
      }
    }
    return [-1];
  },
};
