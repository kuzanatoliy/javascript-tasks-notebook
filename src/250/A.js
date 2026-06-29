module.exports = {
  getFoldersCount: (arr) => {
    const res = [];
    let count = 0;
    let temp = 0;
    for (let j = 0; j < arr.length; j++) {
      count++;
      temp += arr[j] < 0;
      if (temp === 3) {
        res.push(count - 1);
        count = 1;
        temp = 1;
      }
    }
    res.push(count);
    return res;
  },
};
