module.exports = {
  buildArray: (x, y, num) => {
    const arr = [y];
    const mc = num - 1;
    let step = 1;
    for (let j = 0; j < mc; j++) {
      const next = arr[j] - step;
      if (next < x) {
        return [-1];
      }
      step++;
      arr.push(next);
    }
    arr[arr.length - 1] = x;
    return arr.reverse();
  },
};
