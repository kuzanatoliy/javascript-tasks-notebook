module.exports = {
  getMaxPower: (arr) => {
    const temp = [];
    let power = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        power += temp.pop() || 0;
        continue;
      }
      temp.push(arr[j]);
      temp.sort((a, b) => a - b);
    }
    return power;
  },
};
