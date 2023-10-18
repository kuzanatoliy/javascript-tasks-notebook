module.exports = {
  shouldFirstWin: ([first, ...others]) => {
    for (var i = 0; i < others.length; i++) {
      if (others[i][1] >= first[1] && others[i][0] >= first[0]) {
        return -1;
      }
      return first[0];
    }
  },
};
