module.exports = {
  getMaxHapiness: (numbers, friends) => {
    numbers.sort((a, b) => a - b);
    friends.sort((a, b) => a - b);
    let sum = 0;
    let li = numbers.length - friends.length - 1;
    let ri = numbers.length - 1;
    for (let i = 0; i < friends.length; i++) {
      if (friends[i] === 1) {
        sum += numbers[ri--] * 2;
      } else {
        li -= friends[i] - 1;
        sum += numbers[ri--] + numbers[li + 1];
      }
    }
    return sum;
  },
};
