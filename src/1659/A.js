module.exports = {
  buildMap: (a, b) => {
    const max = Math.ceil(a / (b + 1));
    const min = Math.floor(a / (b + 1));
    let count1 = a % (b + 1);
    let count2 = (a - count1 * max) / min;
    const tMax = new Array(max).fill('R').join('');
    const tMin = new Array(min).fill('R').join('');
    let res = '';

    while (count1) {
      res += `${tMax}B`;
      count1--;
    }

    while (count2) {
      res += `${tMin}B`;
      count2--;
    }

    return res.slice(0, res.length - 1);
  },
};
