module.exports = {
  getNumbers: (number) => {
    let ans = Math.floor(number / 2) + 1;
    const temp = [];
    for (let j = 0, jj = 1; j < number; j++) {
      if (j % 2 === 0) {
        temp.push(ans);
        ans++;
        continue;
      }
      temp.push(jj);
      jj++;
    }
    return temp;
  },
};
