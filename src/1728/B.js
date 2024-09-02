module.exports = {
  getPermutation: (number) => {
    const res = number % 2 === 1 ? [1, 3, 2] : [2, 1];
    number -= 2;
    for (let j = res.length + 1; j < number; j += 2) {
      res.push(j + 1);
      res.push(j);
    }
    res.push(number + 1);
    res.push(number + 2);
    return res;
  },
};
