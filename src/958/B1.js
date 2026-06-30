module.exports = {
  getRemotePlannetsCount: (num, tuns) => {
    const map = new Array(num + 1).fill(0);
    for (let j = 0; j < tuns.length; j++) {
      map[tuns[j][0]]++;
      map[tuns[j][1]]++;
    }
    return map.filter((item) => item === 1).length;
  },
};
