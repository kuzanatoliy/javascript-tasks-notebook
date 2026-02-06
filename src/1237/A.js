module.exports = {
  transformScore: (arr) => {
    const res = [];
    let balance = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 === 0) {
        res.push(arr[j] / 2);
      } else if (balance) {
        balance = 0;
        res.push(Math.floor(arr[j] / 2));
      } else {
        res.push(Math.ceil(arr[j] / 2));
        balance = 1;
      }
    }
    return res;
  },
};
