module.exports = {
  getCountOfOptions: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count += arr[j] % 2;
    }
    return count % 2 === 0 ? arr.length - count : count;
  },
};
