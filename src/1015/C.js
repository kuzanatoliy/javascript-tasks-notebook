module.exports = {
  getOperationsCount: (m, songs) => {
    const difs = [];
    let sum = 0;
    for (let j = 0; j < songs.length; j++) {
      sum += songs[j][0];
      difs.push(songs[j][0] - songs[j][1]);
    }
    difs.sort((a, b) => b - a);
    let count = 0;
    for (let jj = 0; sum > m && jj < difs.length; jj++) {
      sum -= difs[jj];
      count++;
    }
    return sum > m ? -1 : count;
  },
};
