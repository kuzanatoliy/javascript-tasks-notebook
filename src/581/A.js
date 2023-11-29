module.exports = {
  getCountOfSocksPairs: (redSocks, blueSocks) => {
    let min;
    let max;
    if (redSocks > blueSocks) {
      min = blueSocks;
      max = redSocks;
    } else {
      min = redSocks;
      max = blueSocks;
    }
    return [min, Math.floor((max - min) / 2)];
  },
};
