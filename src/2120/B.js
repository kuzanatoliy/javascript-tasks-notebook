/* eslint-disable max-params */
module.exports = {
  getCountOfBalls: (s, balls) => {
    let res = 0;
    for (let j = 0; j < balls.length; j++) {
      if (balls[j][0] * balls[j][1] > 0) {
        res += balls[j][2] === balls[j][3];
      } else {
        res += balls[j][2] + balls[j][3] === s;
      }
    }
    return res;
  },
};
