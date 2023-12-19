module.exports = {
  getResult: (plays) => {
    let c1 = 0;
    let c2 = 0;
    for (let i = 0; i < plays.length; i++) {
      if (plays[i][0] > plays[i][1]) {
        c1++;
      }
      if (plays[i][1] > plays[i][0]) {
        c2++;
      }
    }
    return c1 > c2 ? 'Mishka' : c1 < c2 ? 'Chris' : 'Friendship is magic!^^';
  },
};
