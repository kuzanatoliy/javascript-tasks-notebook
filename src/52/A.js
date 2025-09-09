module.exports = {
  getCountOfReplacements: (arr) => {
    const temp = [0, 0, 0, 0];
    for (let j = 0; j < arr.length; j++) {
      temp[arr[j]]++;
    }
    return temp.reduce((a, b) => a + b) - Math.max(...temp);
  },
};
