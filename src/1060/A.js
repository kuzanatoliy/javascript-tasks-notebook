module.exports = {
  getCountOfNums: (smap) => {
    let count = 0;
    for (let j = 0; j < smap.length; j++) {
      if (smap[j] === '8') {
        count++;
      }
    }
    return Math.min(count, Math.floor(smap.length / 11));
  },
};
