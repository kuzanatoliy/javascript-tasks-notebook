module.exports = {
  getMaxCountOfRooms: (map) => {
    const inds = [];
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '1') {
        inds.push(j);
      }
    }
    return inds.length
      ? Math.max(
          (inds[inds.length - 1] + 1) * 2,
          (map.length - inds[0]) * 2,
          (inds[inds.length - 1] - inds[0] + 1) * 2
        )
      : map.length;
  },
};
