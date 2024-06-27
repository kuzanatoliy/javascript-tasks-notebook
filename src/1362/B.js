function check(n, a1, a3) {
  for (let j = 0; j < n; j++) {
    if (a1[j] !== a3[j]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  getMinInteger: (array) => {
    const a1 = array.sort((a, b) => a - b);
    const a3 = new Array(array.length);
    let ans = -1;
    for (let i = 1; i <= 1024; i++) {
      for (let j = 0; j < array.length; j++) {
        a3[j] = a1[j] ^ i;
      }
      a3.sort((a, b) => a - b);
      if (check(array.length, a1, a3)) {
        ans = i;
        break;
      }
    }
    return ans;
  },
};
