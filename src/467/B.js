module.exports = {
  checkCountOfFriends: (players, types, dif) => {
    let count = 0;
    for (let i = 0; i < players.length - 1; i++) {
      let k = players.at(-1) ^ players[i];
      let c = 0;
      for (let j = 0; k > 0 && j < types; j++) {
        if (k % 2 > 0) {
          c++;
        }
        k = k >> 1;
      }
      if (c <= dif) {
        count++;
      }
    }
    return count;
  },
};
