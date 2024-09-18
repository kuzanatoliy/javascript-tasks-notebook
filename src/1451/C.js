module.exports = {
  isItPossibleToTransform: (strA, strB, k) => {
    const arrA = new Array(26).fill(0);
    const arrB = new Array(26).fill(0);
    for (let j = 0; j < strA.length; j++) {
      arrA[strA[j].charCodeAt() - 97]++;
      arrB[strB[j].charCodeAt() - 97]++;
    }
    for (let j = 0; j < 26; j++) {
      if (arrA[j] > arrB[j]) {
        arrA[j] -= arrB[j];
        arrB[j] = 0;
        continue;
      }
      arrB[j] -= arrA[j];
      arrA[j] = 0;
    }
    let sumA = 0;
    let sumB = 0;
    for (let j = 0; j < 26; j++) {
      sumA += arrA[j];
      sumB += arrB[j];
      if (arrA[j] % k || arrB[j] % k || sumA < sumB) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
