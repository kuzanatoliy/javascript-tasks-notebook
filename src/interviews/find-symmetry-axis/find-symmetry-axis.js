/* eslint-disable max-depth */
module.exports = {
  findSymmetryAxis: (points) => {
    const map = new Map();
    for (let j = 0; j < points.length; j++) {
      if (!map.has(points[j].x)) {
        map.set(points[j].x, new Set(map[points[j].y]));
      } else {
        map.get(points[j].x).add(points[j].y);
      }
    }
    const temp = Array.from(map).sort((a, b) => a[0] - b[0]);
    let l = 1;
    let r = temp.length - 2;
    while (l <= r) {
      if (temp[l][0] - temp[l - 1][0] !== temp[r + 1][0] - temp[r][0]) {
        return null;
      }
      l++;
      r--;
    }
    l = 0;
    r = temp.length - 1;
    while (l < r) {
      if (temp[l][1].size === temp[r][1].size) {
        const vals = Array.from(temp[l][1]);
        for (let jj = 0; jj < vals.length; jj++) {
          if (!temp[r][1].has(vals[jj])) {
            return null;
          }
        }
      } else {
        return null;
      }
      l++;
      r--;
    }
    return (temp[l][0] + temp[r][0]) / 2;
  },
};
