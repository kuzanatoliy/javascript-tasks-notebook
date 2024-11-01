module.exports = {
  getCountOfOperations: (doorMap) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < doorMap.length; j++) {
      sum1 += doorMap[j][0];
      sum2 += doorMap[j][1];
    }
    return (
      Math.min(sum1, doorMap.length - sum1) +
      Math.min(sum2, doorMap.length - sum2)
    );
  },
};
