module.exports = {
  getArray: (props) => {
    const [n, k, x] = props;

    if (x !== 1) {
      return ['YES', n, new Array(n).fill(1)];
    } else if (k > 1) {
      if (n % 2 === 0) {
        const temp = n / 2;
        return ['YES', temp, new Array(temp).fill(2)];
      } else if (k > 2) {
        const temp = Math.floor(n / 2);
        const arr = new Array(temp - 1).fill(2);
        arr.push(3);
        return ['YES', temp, arr];
      }
    }
    return ['NO'];
  },
};
