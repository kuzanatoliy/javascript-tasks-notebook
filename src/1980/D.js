/* eslint-disable complexity */
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function isNoDecrease(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isItPossibleToTransformArray: (arr) => {
    const arrGcd = [];

    for (let j = 0; j < arr.length - 1; j++) {
      arrGcd.push(gcd(arr[j], arr[j + 1]));
    }

    let index = -1;
    for (let j = 0; j < arrGcd.length; j++) {
      if (arrGcd[j] > arrGcd[j + 1]) {
        index = j;
        break;
      }
    }

    if (index === -1) {
      return 'YES';
    }

    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    for (let j = 0; j < arr.length; j++) {
      if (j !== index) {
        arr1.push(arr[j]);
      }
      if (j !== index + 1) {
        arr2.push(arr[j]);
      }
      if (j !== index + 2) {
        arr3.push(arr[j]);
      }
    }

    const arr1Gcd = [];
    const arr2Gcd = [];
    const arr3Gcd = [];

    for (let j = 0; j < arr1.length - 1; j++) {
      arr1Gcd.push(gcd(arr1[j], arr1[j + 1]));
    }
    for (let j = 0; j < arr2.length - 1; j++) {
      arr2Gcd.push(gcd(arr2[j], arr2[j + 1]));
    }
    for (let j = 0; j < arr3.length - 1; j++) {
      arr3Gcd.push(gcd(arr3[j], arr3[j + 1]));
    }

    let count = 0;
    if (isNoDecrease(arr1Gcd)) {
      count++;
    }
    if (isNoDecrease(arr2Gcd)) {
      count++;
    }
    if (isNoDecrease(arr3Gcd)) {
      count++;
    }

    return count > 0 ? 'YES' : 'NO';
  },
};
