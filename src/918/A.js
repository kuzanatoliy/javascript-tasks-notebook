module.exports = {
  getName: (num) => {
    let prev = 1;
    let next = 2;
    let res = 'O';
    for (let j = 2; j <= num; j++) {
      if (j === next) {
        res += 'O';
        const temp = next + prev;
        prev = next;
        next = temp;
        continue;
      }
      res += 'o';
    }
    return res;
  },
};
