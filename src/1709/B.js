module.exports = {
  getQuestAmounts: (arr, quests) => {
    const map = [0];
    let map2 = [0];
    for (let j = 1; j < arr.length; j++) {
      map[j] = map[j - 1] + (arr[j - 1] > arr[j] ? arr[j - 1] - arr[j] : 0);
      map2[j] =
        map2[j - 1] +
        (arr[arr.length - j] > arr[arr.length - j - 1]
          ? arr[arr.length - j] - arr[arr.length - j - 1]
          : 0);
    }
    map2 = map2.reverse();
    const res = [];
    for (let jj = 0; jj < quests.length; jj++) {
      if (quests[jj][1] > quests[jj][0]) {
        res.push(map[quests[jj][1] - 1] - map[quests[jj][0] - 1]);
      } else {
        res.push(map2[quests[jj][1] - 1] - map2[quests[jj][0] - 1]);
      }
    }
    return res;
  },
};
