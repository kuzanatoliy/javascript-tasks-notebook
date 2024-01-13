module.exports = {
  getCountOfPyramids: (number) => {
    const arr = [2];
    let count = 0;
    let c = 2;
    while (number > arr[arr.length - 1]) {
      c += 3;
      arr.push(arr[arr.length - 1] + c);
    }
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] <= number) {
        number -= arr[j];
        count++;
        j++;
      }
    }
    return count;
  },
};
