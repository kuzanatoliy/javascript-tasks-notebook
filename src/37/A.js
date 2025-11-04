module.exports = {
  getTowersAndMaxLength: (arr) => {
    let temp = new Array(1001).fill(0);
    for (let j = 0; j < arr.length; j++) {
      temp[arr[j]]++;
    }
    temp = temp.filter((item) => item !== 0);
    return [Math.max(...temp), temp.length];
  },
};
