module.exports = {
  getMiddleOfContest: (t1, t2) => {
    const ans1 = t1.split(':').map((item) => +item);
    const ans2 = t2.split(':').map((item) => +item);
    const time = (ans1[0] * 60 + ans1[1] + ans2[0] * 60 + ans2[1]) / 2;
    const h = Math.floor(time / 60);
    const m = time % 60;
    return `${h < 10 ? `0${h || 0}` : h}:${m < 10 ? `0${m || 0}` : m}`;
  },
};
