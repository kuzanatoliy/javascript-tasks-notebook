module.exports = {
  transformExpression: (expression) => {
    const vals = expression.split('');
    if (vals[0] === vals[2]) {
      vals[1] = '=';
    } else if (vals[0] < vals[2]) {
      vals[1] = '<';
    } else {
      vals[1] = '>';
    }
    return vals.join('');
  },
};
