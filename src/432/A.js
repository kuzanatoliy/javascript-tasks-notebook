module.exports = {
  getBandsCount: (members, count) => {
    let res = 0;
    for (let i = 0; i < members.length; i++) {
      if (5 - members[i] >= count) {
        res++;
      }
    }
    return Math.floor(res / 3);
  },
};
