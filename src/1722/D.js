module.exports = {
  getMaxValues: (map) => {
    const temp = [];
    let sum = 0;
    let psum = 0;
    for (let j = 0; j < map.length; j++) {
      temp.push([map[j], j, map.length - j - 1, j]);
      sum += temp[j][0] === 'L' ? temp[j][1] : temp[j][2];
      if (temp[j][1] > temp[j][2]) {
        temp[j][0] = 'L';
      } else if (temp[j][1] < temp[j][2]) {
        temp[j][0] = 'R';
      }
      psum += Math.max(temp[j][1], temp[j][2]);
    }
    const ans = [];
    for (let jj = 0; jj < temp.length / 2; jj++) {
      ans.push(temp[jj]);
      ans.push(temp[temp.length - 1 - jj]);
    }
    ans.length = temp.length;
    const res = new Array(temp.length).fill(psum);
    for (let jjj = 0, k = 0; k < ans.length && jjj < ans.length; k++, jjj++) {
      while (jjj < ans.length && map[ans[jjj][3]] === ans[jjj][0]) {
        jjj++;
      }
      if (jjj === ans.length) {
        break;
      }
      sum -= Math.min(ans[jjj][1], ans[jjj][2]);
      sum += Math.max(ans[jjj][1], ans[jjj][2]);
      res[k] = sum;
    }
    return res;
  },
};
