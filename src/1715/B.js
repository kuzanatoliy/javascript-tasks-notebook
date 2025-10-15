module.exports = {
  buildArray: (num, k, b, s) => {
    if (s < k * b || s > k * b + num * (k - 1)) {
      return [-1];
    }
    const ans = [];
    let sum = s;
    let first = b * k;
    first += Math.min(sum - b * k, k - 1);
    ans.push(first);
    sum -= first;
    while (sum > 0) {
      const next = Math.min(k - 1, sum);
      ans.push(next);
      sum -= next;
    }
    while (ans.length < num) {
      ans.push(0);
    }
    return ans;
  },
};
