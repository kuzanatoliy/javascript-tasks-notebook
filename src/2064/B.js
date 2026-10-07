module.exports = {
  transformArray: (arr) => {
    const store = {};
    for (let j = 0; j < arr.length; j++) {
      store[arr[j]] = (store[arr[j]] || 0) + 1;
    }
    const ans = [];
    for (let jj = 0; jj < arr.length; jj++) {
      if (store[arr[jj]] === 1) {
        let jjj = jj + 1;
        while (store[arr[jjj]] === 1) {
          jjj++;
        }
        ans.push([jj, jjj - 1]);
        jj = jjj;
      }
    }
    if (ans.length === 0) {
      return [0];
    }
    let [res] = ans;
    for (let a = 1; a < ans.length; a++) {
      if (res[1] - res[0] < ans[a][1] - ans[a][0]) {
        res = ans[a];
      }
    }
    return [res[0] + 1, res[1] + 1];
  },
};
