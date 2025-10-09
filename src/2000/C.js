/* eslint-disable no-undefined */
module.exports = {
  isCorrectTemplate: (template, strs) => {
    const res = [];
    for (let j = 0; j < strs.length; j++) {
      if (template.length !== strs[j].length) {
        res.push('NO');
        continue;
      }
      const map = {};
      for (let jj = 0; jj < strs[j].length; jj++) {
        if (!map[template[jj]] && map[strs[j][jj]] === undefined) {
          map[template[jj]] = strs[j][jj];
          map[strs[j][jj]] = template[jj];
          continue;
        }
        if (
          strs[j][jj] !== map[template[jj]] ||
          template[jj] !== map[strs[j][jj]]
        ) {
          res.push('NO');
          break;
        }
      }
      if (j === res.length) {
        res.push('YES');
      }
    }

    return res;
  },
};
