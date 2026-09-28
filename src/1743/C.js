module.exports = {
  getSurviveCount: (map, arr) => {
    let sum = 0;
    let j = 0;
    while (map[j] === '1') {
      sum += arr[j];
      j++;
    }
    for (; j < arr.length; j++) {
      if (map[j + 1] === '1') {
        const temp = [arr[j]];
        while (map[j + 1] === '1') {
          j++;
          temp.push(arr[j]);
        }
        sum += temp.reduce((a, b) => a + b) - Math.min(...temp);
      }
    }
    return sum;
  },
};
