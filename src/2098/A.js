module.exports = {
  transformPhone: (phone) => {
    const counts = new Array(10).fill(0);
    for (let j = 0; j < 10; j++) {
      counts[phone[j]]++;
    }
    let res = '';
    for (let jj = 0; jj < 10; jj++) {
      for (let jjj = 10 - jj - 1; jjj < 10; jjj++) {
        if (counts[jjj]) {
          res += jjj;
          counts[jjj]--;
          break;
        }
      }
    }
    return res;
  },
};
