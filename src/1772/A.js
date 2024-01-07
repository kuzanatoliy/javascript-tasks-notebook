module.exports = {
  getResultOfExpression: (expression) => {
    const vals = expression.split('+').map((item) => +item);
    return vals[0] + vals[1];
  },
};
