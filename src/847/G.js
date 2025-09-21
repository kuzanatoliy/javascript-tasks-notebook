module.exports = {
  getCountOfRooms: (shedule) => {
    let max = 0;
    for (let j = 0; j < shedule[0].length; j++) {
      let c = 0;
      for (let jj = 0; jj < shedule.length; jj++) {
        c += shedule[jj][j] === '1';
      }
      max = Math.max(max, c);
    }
    return max;
  },
};
