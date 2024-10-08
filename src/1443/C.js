module.exports = {
  getDeliveryTime: (arrA, arrB) => {
    const arr = arrA
      .map((item, index) => [item, arrB[index]])
      .sort((a, b) => b[0] - a[0]);
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (count > arr[j][0]) {
        return count;
      }
      count += arr[j][1];
      if (count >= arr[j][0]) {
        return arr[j][0];
      }
    }
    return count;
  },
};
