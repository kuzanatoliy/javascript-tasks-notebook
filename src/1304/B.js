/* eslint-disable prefer-destructuring */
module.exports = {
  buildStrings: (strs) => {
    const store = new Set();
    const pol = new Map();
    const pairs = [];
    for (let j = 0; j < strs.length; j++) {
      const rev = strs[j].split('').reverse().join('');
      if (rev === strs[j]) {
        pol.set(strs[j], (pol.get(strs[j]) || 0) + 1);
        continue;
      }
      if (store.has(rev)) {
        pairs.push([rev, strs[j]]);
        store.delete(rev);
        continue;
      }
      store.add(strs[j]);
    }
    let res = '';
    let left = '';
    let right = '';
    const temp = Array.from(pol.entries());
    for (let jjj = 0; jjj < temp.length; jjj++) {
      if (!res && temp[jjj][1] % 2 === 1) {
        res = temp[jjj][0];
      }
      const d = new Array(Math.floor(temp[jjj][1] / 2))
        .fill(temp[jjj][0])
        .join('');
      left = `${d}${left}`;
      right = `${right}${d}`;
    }
    for (let jj = 0; jj < pairs.length; jj++) {
      res = `${pairs[jj][0]}${res}${pairs[jj][1]}`;
    }
    return `${left}${res}${right}`;
  },
};
