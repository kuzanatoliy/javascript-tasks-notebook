module.exports = {
  getState: (pings) => {
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;
    for (let j = 0; j < pings.length; j++) {
      if (pings[j][0] === 1) {
        x1 += pings[j][1];
        y1 += pings[j][2];
      } else {
        x2 += pings[j][1];
        y2 += pings[j][2];
      }
    }
    return [x1 < y1 ? 'DEAD' : 'LIVE', x2 < y2 ? 'DEAD' : 'LIVE'];
  },
};
