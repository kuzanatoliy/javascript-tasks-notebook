module.exports = {
  shouldFirstWin: ([first, ...others]) => {
    let i;
    for (i = 0; i < others.length; i++) {
      if (others[i][1] >= first[1] && others[i][0] >= first[0]) {
        break;
      }
    }
    return others.length === i ? first[0] : -1;
  },
};
