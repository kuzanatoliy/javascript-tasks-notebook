module.exports = {
  getMaxSum: (num, B, x, y) => {
    let sum = 0;
    const arr = [0];
    for (let j = 0; j < num; j++) {
      let next = arr[j] + x;
      if (next > B) {
        next -= x + y;
      }
      arr.push(next);
      sum += next;
    }
    return sum;
  },
};
