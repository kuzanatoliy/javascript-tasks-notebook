module.exports = {
  buildMatrix: (m, num) => {
    const nums = [];
    for (let i = 0; i < parseInt(num / 4); i++) {
      nums.push(1, 0, 0, 1);
    }
    if (num % 4 >= 1) {
      nums.push(1);
    }
    if (num % 4 >= 2) {
      nums.push(0);
    }
    if (num % 4 >= 3) {
      nums.push(0);
    }

    const numsInv = [];
    for (let i = 0; i < num; i++) {
      numsInv.push((nums[i] + 1) % 2);
    }

    const matrix = [];
    for (let i = 0; i < parseInt(m / 4); i++) {
      matrix.push([...nums]);
      matrix.push([...numsInv]);
      matrix.push([...numsInv]);
      matrix.push([...nums]);
    }

    if (m % 4 >= 1) {
      matrix.push([...nums]);
    }
    if (m % 4 >= 2) {
      matrix.push([...numsInv]);
    }
    if (m % 4 >= 3) {
      matrix.push([...numsInv]);
    }
    return matrix;
  },
};
