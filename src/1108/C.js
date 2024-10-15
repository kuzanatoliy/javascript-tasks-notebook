const P1 = 'RGB';
const P2 = 'RBG';
const P3 = 'GRB';
const P4 = 'GBR';
const P5 = 'BGR';
const P6 = 'BRG';

module.exports = {
  getCountOfTurns: (map) => {
    const counts = [
      [0, ''],
      [0, ''],
      [0, ''],
      [0, ''],
      [0, ''],
      [0, ''],
    ];

    for (let j = 0; j < map.length; j++) {
      const index = j % 3;
      if (P1[index] !== map[j]) {
        counts[0][0]++;
      }
      counts[0][1] += P1[index];
      if (P2[index] !== map[j]) {
        counts[1][0]++;
      }
      counts[1][1] += P2[index];
      if (P3[index] !== map[j]) {
        counts[2][0]++;
      }
      counts[2][1] += P3[index];
      if (P4[index] !== map[j]) {
        counts[3][0]++;
      }
      counts[3][1] += P4[index];
      if (P5[index] !== map[j]) {
        counts[4][0]++;
      }
      counts[4][1] += P5[index];
      if (P6[index] !== map[j]) {
        counts[5][0]++;
      }
      counts[5][1] += P6[index];
    }
    let min = 0;
    for (let jj = 1; jj < counts.length; jj++) {
      if (counts[jj][0] < counts[min][0]) {
        min = jj;
      }
    }
    return counts[min];
  },
};
