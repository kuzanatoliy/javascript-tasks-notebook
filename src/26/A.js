module.exports = {
  getCountOfPrimeNumbers: (number) => {
    const nums = new Array(number + 1).fill(1);
    for (let i = 2; i <= number; i++) {
      if (nums[i] === 1) {
        for (let j = 2 * i; j <= number; j += i) {
          nums[j]++;
        }
      }
    }

    let total = 0;
    for (let i = 2; i <= number; i++) {
      if (nums[i] === 3) {
        total++;
      }
    }
    return total;
  },
};
