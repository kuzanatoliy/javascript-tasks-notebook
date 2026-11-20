module.exports = {
  getSegmentNumber: (segments) => {
    let max = 0;
    let min = 1000000000;
    for (let j = 0; j < segments.length; j++) {
      min = Math.min(segments[j][0], min);
      max = Math.max(segments[j][1], max);
    }
    for (let jj = 0; jj < segments.length; jj++) {
      if (min === segments[jj][0] && max === segments[jj][1]) {
        return jj + 1;
      }
    }
    return -1;
  },
};
