module.exports = {
  getLongestSeria: (rounds) => {
    const max = parseInt(new Array(rounds[0].length).fill('1').join(''), 2);
    let ld = 0;
    let d = 0;
    for (let j = 0; j < rounds.length; j++) {
      if (parseInt(rounds[j], 2) < max) {
        d++;
      } else {
        d = 0;
      }
      ld = Math.max(d, ld);
    }
    return ld;
  },
};
