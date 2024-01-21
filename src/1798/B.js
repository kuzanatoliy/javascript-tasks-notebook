/* eslint-disable max-depth */
module.exports = {
  getLotteryWinners: (participants) => {
    const res = [];
    const wins = new Set();
    let c = 0;
    for (let j = participants.length; j > 0; c++) {
      j--;
      let added = false;
      for (let jj = 0; jj < participants[j].length; jj++) {
        if (!wins.has(participants[j][jj])) {
          if (!added) {
            res.push(participants[j][jj]);
          }
          wins.add(participants[j][jj]);
          added = true;
        }
      }
      if (!added) {
        break;
      }
    }
    return c === participants.length ? res.reverse() : -1;
  },
};
