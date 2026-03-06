/* eslint-disable no-constant-condition */
module.exports = {
  getMEX: (arr) => {
    arr.sort((a, b) => a - b);
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
      const st = new Set();
      const toAdd = -1 * arr[i];
      for (let j = 0; j < arr.length; j++) {
        st.add(arr[j] + toAdd);
      }
      let idx = 0;
      while (true) {
        if (st.has(idx)) {
          idx++;
        } else {
          break;
        }
      }
      ans = Math.max(ans, idx);
    }
    return ans;
  },
};
