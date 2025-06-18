module.exports = {
  getPermutation: (num, a, b) => {
    const arr = new Array(num);
    arr[0] = a;
    arr[arr.length - 1] = b;
    let next = arr.length;
    for (let j = 1; j < arr.length - 1; j++) {
      if (next === b || next === a) {
        next--;
        j--;
        continue;
      }
      arr[j] = next;
      next--;
    }
    num /= 2;
    return arr[0] > arr[num - 1] || arr[num] > arr[arr.length - 1] ? [-1] : arr;
  },
};
