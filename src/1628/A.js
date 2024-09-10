module.exports = {
  transformArray: (array) => {
    const freq = Array(array.length + 1).fill(0);
    const delP = Array(array.length + 1).fill(-1);

    for (let i = 0; i < array.length; i++) {
      freq[array[i]]++;
    }

    let mexC = 0;
    while (mexC < array.length && freq[mexC]) {
      mexC++;
    }

    const ans = [];
    let cnt = 0;
    let lftP = 0;
    let mexN = mexC;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < mexC && delP[array[i]] < lftP) {
        cnt++;
      }

      freq[array[i]]--;
      if (freq[array[i]] === 0) {
        mexN = Math.min(mexN, array[i]);
      }

      delP[array[i]] = i;

      if (cnt === mexC) {
        ans.push(mexC);
        mexC = mexN;
        lftP = i + 1;
        cnt = 0;
      }
    }

    return ans;
  },
};
