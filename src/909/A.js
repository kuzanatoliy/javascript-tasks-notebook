module.exports = {
  buildLogin: (name) => {
    const temp = name.split(' ');
    let [[res]] = temp;
    for (let j = 1; j < temp[0].length && temp[0][j] < temp[1][0]; j++) {
      res += temp[0][j];
    }
    return res + temp[1][0];
  },
};
