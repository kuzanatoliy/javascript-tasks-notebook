module.exports = {
  getSteps: (a, b) => {
    const result = [];

    const aLen = a.toString(2).length;
    const bLen = b.toString(2).length;

    if (aLen < bLen) {
      return -1;
    }

    let x = b ^ a;

    if (x <= a) {
      result.push(x);
      return result;
    }

    let xBin = x.toString(2);

    xBin = xBin.slice(-bLen);
    x = parseInt(xBin, 2);

    result.push(x);

    a ^= x;

    x = b ^ a;

    result.push(x);
    return result;
  },
};
