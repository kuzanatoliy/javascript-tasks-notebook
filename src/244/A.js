module.exports = {
  getRepresentation: (num, k, wish) => {
    const fls = new Array(k * num + 1).fill(0);
    const temp = [];
    for (let j = 0; j < wish.length; j++) {
      fls[wish[j]]++;
      temp.push([wish[j]]);
    }
    for (let jj = 1, w = 0; jj < fls.length; jj++) {
      if (!fls[jj]) {
        temp[w].push(jj);
        w = (w + 1) % k;
      }
    }
    return temp;
  },
};
