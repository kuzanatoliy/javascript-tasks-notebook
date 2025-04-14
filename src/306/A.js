module.exports = {
  getPresents: (num, k) => {
    const min = Math.floor(num / k);
    let d = num % k;
    const pr = new Array(k).fill(min);
    while (d) {
      d--;
      pr[d]++;
    }

    return pr.reverse();
  },
};
