module.exports = {
  getPossibleCharacteristicMatrix: (length, count) => {
    let sum = 1;
    const arr = [];
    for (let j = 0; j < length; j++) {
      arr[length - 1 - j] = count - j;
    }
    arr[0] = 1;
    for (let j = 1; j < length - 1; j++) {
      const temp = sum + j;
      if (temp >= arr[j + 1]) {
        break;
      }
      arr[j] = temp;
      sum = temp;
    }
    return arr;
  },
};
