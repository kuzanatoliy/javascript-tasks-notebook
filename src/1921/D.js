/* eslint-disable max-depth */
module.exports = {
  getMaxDif: (arr1, arr2) => {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let left1 = 0;
    let right1 = arr1.length - 1;
    let left2 = 0;
    let right2 = arr2.length - 1;
    let sum = 0;
    while (left1 <= right1) {
      const a = Math.abs(arr1[left1] - arr2[left2]);
      const b = Math.abs(arr1[left1] - arr2[right2]);
      const c = Math.abs(arr1[right1] - arr2[left2]);
      const d = Math.abs(arr1[right1] - arr2[right2]);
      if (a > b) {
        if (c > a) {
          if (d > c) {
            sum += d;
            right1--;
            right2--;
          } else {
            sum += c;
            right1--;
            left2++;
          }
        } else if (d > a) {
          sum += d;
          right1--;
          right2--;
        } else {
          sum += a;
          left1++;
          left2++;
        }
      } else if (c > b) {
        if (d > c) {
          sum += d;
          right1--;
          right2--;
        } else {
          sum += c;
          right1--;
          left2++;
        }
      } else if (d > b) {
        sum += d;
        right1--;
        right2--;
      } else {
        sum += b;
        left1++;
        right2--;
      }
    }
    return sum;
  },
};
