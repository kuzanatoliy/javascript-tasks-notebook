module.exports = {
  getOperationOrder: (num) => {
    if (num % 2 === 0) {
      return -1;
    }
    const temp = [num % 2];
    const res = [];
    num = Math.floor(num / 2);
    while (num > 0) {
      temp.push(num % 2);
      res.push(
        temp[temp.length - 1] === 1 && temp[temp.length - 1] === 1 ? 2 : 1
      );
      num = Math.floor(num / 2);
    }
    return res.reverse();
  },
};
