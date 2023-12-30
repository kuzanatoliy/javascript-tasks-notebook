/* eslint-disable max-depth */
module.exports = {
  getCountOfWordsInInterestingStory: (strings) => {
    const l = new Set();
    let bc = 0;

    for (let j = 0; j < strings.length; j++) {
      for (let k = 0; k < strings[j].length; k++) {
        l.add(strings[j][k]);
      }
    }

    for (const item of l) {
      let a = 0;
      let b = 0;
      const ans = [];
      for (let j = 0; j < strings.length; j++) {
        let la = 0;
        let lb = 0;
        for (let k = 0; k < strings[j].length; k++) {
          if (strings[j][k] === item) {
            la++;
          }
        }
        lb = strings[j].length - la;
        ans.push([la, lb, lb - la]);
        a += la;
        b += lb;
      }
      if (a > b) {
        bc = strings.length;
        break;
      }
      ans.sort((item1, item2) => item1[2] - item2[2]);
      let t = strings.length;
      while (t && t > bc) {
        t--;
        a -= ans[t][0];
        b -= ans[t][1];
        if (a > b) {
          bc = t;
          break;
        }
      }
    }

    return bc;
  },
};
