const track = [2, 4, 8, 16, 1, 17, 19, 13];

module.exports = {
  isItPossibleToGetEqualArray: (a) => {
    if (track.includes(a[0] % 20)) {
      for (let i = 1; i < a.length; i++) {
        if (!track.includes(a[i] % 20)) {
          return 'NO';
        }
      }
    } else if (track.includes((a[0] + 10) % 20)) {
      for (let i = 1; i < a.length; i++) {
        if (!track.includes((a[i] + 10) % 20)) {
          return 'NO';
        }
      }
    } else {
      const x = a[0] + (a[0] % 10);
      for (let i = 1; i < a.length; i++) {
        if (a[i] + (a[i] % 10) !== x) {
          return 'NO';
        }
      }
    }
    return 'YES';
  },
};
