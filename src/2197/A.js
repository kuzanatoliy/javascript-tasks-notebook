module.exports = {
  getCountOfFriends: (x) => {
    let count = 0;

    for (let y = x; y <= x + 90; y++) {
      let sum = 0;
      let num = y;

      while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }

      if (y - sum === x) {
        count++;
      }
    }
    return count;
  },
};
