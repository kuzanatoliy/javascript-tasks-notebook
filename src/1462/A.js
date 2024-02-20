module.exports = {
  getSequence: (array) => {
    let j = 0;
    let jj = array.length - 1;
    const res = [];
    while (j < jj) {
      res.push(array[j]);
      res.push(array[jj]);
      j++;
      jj--;
    }
    if (j === jj) {
      res.push(array[j]);
    }
    return res;
  },
};
