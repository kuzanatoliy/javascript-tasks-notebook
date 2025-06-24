module.exports = {
  getCountOfTheBestStudents: (scores) => {
    const fs = new Array(scores[0].length);
    for (let j = 0; j < scores[0].length; j++) {
      let max = scores[0][j];
      fs[j] = [0];
      for (let jj = 1; jj < scores.length; jj++) {
        if (max === scores[jj][j]) {
          fs[j].push(jj);
        } else if (scores[jj][j] > max) {
          fs[j] = [jj];
          max = scores[jj][j];
        }
      }
    }

    const set = new Set();

    for (let s = 0; s < fs.length; s++) {
      for (let ss = 0; ss < fs[s].length; ss++) {
        set.add(fs[s][ss]);
      }
    }

    return set.size;
  },
};
