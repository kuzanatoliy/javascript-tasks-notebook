module.exports = {
  getDifference: (currTime, startTime) => {
    let ans = currTime.split(':').map((item) => +item);
    const t1 = ans[0] * 60 + ans[1];
    ans = startTime.split(':').map((item) => +item);
    const t2 = ans[0] * 60 + ans[1];
    const d = t1 >= t2 ? t1 - t2 : 1440 - t2 + t1;
    const h = Math.floor(d / 60);
    const m = d % 60;
    return `${h > 9 ? h : `0${h}`}:${m > 9 ? m : `0${m}`}`;
  },
};
