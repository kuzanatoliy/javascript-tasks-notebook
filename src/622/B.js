module.exports = {
  getNextTime: (time, minutes) => {
    const t = time.split(':').map((item) => +item);
    const d = t[1] + minutes;
    const m = d % 60;
    const h = (Math.floor(d / 60) + t[0]) % 24;
    return `${h > 9 ? h : `0${h}`}:${m > 9 ? m : `0${m}`}`;
  },
};
