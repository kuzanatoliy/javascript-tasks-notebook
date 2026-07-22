module.exports = {
  isItPossibleToGetK: (k, arr) => {
    const mp = {};

    for (let i = 0; i < arr.length; i++) {
      if (!mp[arr[i]]) {
        mp[arr[i]] = 0;
      }
      mp[arr[i]]++;
    }

    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
      mp[arr[i]]--;
      const a = arr[i] + k;
      const b = arr[i] - k;
      if (mp[a] > 0 || mp[b] > 0) {
        ans = 1;
        break;
      }
      mp[arr[i]]++;
    }

    return ans === 1 ? 'YES' : 'NO';
  },
};
