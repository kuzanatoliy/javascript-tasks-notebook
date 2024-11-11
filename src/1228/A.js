module.exports = {
  getX: (l, r) => {
    while (l <= r) {
      const sl = l.toString();
      const set = new Set(sl.split(''));
      if (sl.length === set.size) {
        return l;
      }
      l++;
    }
    return -1;
  },
};
