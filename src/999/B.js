module.exports = {
  decriptString: (str) => {
    let num = 2;
    const ans = str.split('');
    while (num <= str.length) {
      if (!(str.length % num)) {
        for (let j = 0; j < num / 2; j++) {
          const temp = ans[j];
          ans[j] = ans[num - j - 1];
          ans[num - j - 1] = temp;
        }
      }
      num++;
    }
    return ans.join('');
  },
};
