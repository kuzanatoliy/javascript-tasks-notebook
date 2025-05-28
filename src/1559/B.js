/* eslint-disable complexity */
module.exports = {
  paint: (origin) => {
    const n = origin.length;
    const v = origin.split('');

    for (let i = n - 2; ~i; i--) {
      if (v[i] === '?') {
        if (v[i + 1] !== '?') {
          v[i] = v[i + 1] === 'R' ? 'B' : 'R';
        }
      }
    }

    for (let i = 1; i < n; i++) {
      if (v[i] === '?') {
        if (v[i - 1] !== '?') {
          v[i] = v[i - 1] === 'B' ? 'R' : 'B';
        }
      }
    }

    for (let i = n - 2; ~i; i--) {
      if (v[i] === '?') {
        v[i] = v[i + 1] === 'R' ? 'B' : 'R';
      }
    }

    for (let i = 1; i < n; i++) {
      if (v[i] === '?') {
        v[i] = v[i - 1] === 'B' ? 'R' : 'B';
      }
    }

    let res = v.join('');
    if (res === '?') {
      res = 'B';
    }
    return res;
  },
};
