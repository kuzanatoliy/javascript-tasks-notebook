module.exports = {
  getMaxCountOfVisitors: (...props) => {
    props.sort((a, b) => b - a);
    let [a, b, c] = props;
    let count = 0;
    if (a) {
      a--;
      count++;
    }
    if (b) {
      b--;
      count++;
    }
    if (c) {
      c--;
      count++;
    }
    if (a && b) {
      a--;
      b--;
      count++;
    }
    if (b && c) {
      b--;
      c--;
      count++;
    }
    if (c && a) {
      c--;
      a--;
      count++;
    }
    if (a && b && c) {
      count++;
    }
    return count;
  },
};
