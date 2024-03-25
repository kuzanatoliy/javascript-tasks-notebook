module.exports = {
  getMinMaxNumber: (length, sum) => {
    if (length === 1 && sum === 0) {
      return [0, 0];
    }

    if (sum === 0 || sum > 9 * length) {
      return [-1, -1];
    }

    const temp = new Array(length).fill(0);
    const temp2 = [...temp];

    if (sum <= 9) {
      temp[0] = 1;
      temp[temp.length - 1] += sum - 1;
      temp2[0] = sum;
      return [temp.join(''), temp2.join('')];
    }

    let count = Math.floor(sum / 9);

    if (count === length) {
      const res = temp.fill(9).join('');
      return [res, res];
    }

    temp2.fill(9, 0, count);
    temp2[count] += sum - count * 9;
    temp[0] = 1;
    sum--;
    count = Math.floor(sum / 9);
    temp.fill(9, temp.length - count, temp.length);
    temp[temp.length - count - 1] += sum - count * 9;

    return [temp.join(''), temp2.join('')];
  },
};
