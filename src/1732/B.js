module.exports = {
  getCountOfOperations: (str) => {
    const arr = str.split('').map((item) => +item);
    let ans = 0;
    let inv = 0;
    for (let i = 0; i < arr.length; i++) {
      const cur = (arr[i] + inv) % 2;
      if (cur === 1) {
        ans++;
        inv = 1 - inv;
      }
    }
    return ans ? ans - 1 : 0;
  },
};
