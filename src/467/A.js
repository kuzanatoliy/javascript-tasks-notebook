module.exports = {
  checkFreeSpace: (rooms) => {
    let count = 0;
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i][1] - rooms[i][0] > 1) {
        count++;
      }
    }
    return count;
  },
};
