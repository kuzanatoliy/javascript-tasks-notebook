module.exports = {
  getMaxNumber: (string) => {
    let z = 0;
    const res = [];
    for (let j = 0; j < string.length; j++) {
      if (string[j] === 'n') {
        res.push(1);
      }
      if (string[j] === 'z') {
        z++;
      }
    }
    while (z) {
      res.push(0);
      z--;
    }
    return res;
  },
};
