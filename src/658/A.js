module.exports = {
  getWinner: (cost, scores, times) => {
    let t1 = 0;
    let s1 = 0;
    let t2 = 0;
    let s2 = 0;
    for (let j = 0, jj = scores.length - 1; j < scores.length; j++, jj--) {
      t1 += times[j];
      s1 += Math.max(scores[j] - cost * t1, 0);
      t2 += times[jj];
      s2 += Math.max(scores[jj] - cost * t2, 0);
    }
    return s1 > s2 ? 'Limak' : s1 < s2 ? 'Radewoosh' : 'Tie';
  },
};
